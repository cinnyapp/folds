import classNames from "classnames";
import React, { ReactNode, useCallback, useEffect, useLayoutEffect, useRef } from "react";
import { as } from "../as";
import { Portal } from "../portal";
import { Align, getRelativeFixedPosition, Position, RectCords } from "../util";
import * as css from "./PopOut.css";

export interface PopOutProps {
  anchor?: RectCords;
  position?: Position;
  align?: Align;
  offset?: number;
  alignOffset?: number;
  content: ReactNode;
}
export const PopOut = as<"div", PopOutProps>(
  (
    {
      as: AsPopOut = "div",
      className,
      anchor,
      position = "Bottom",
      align = "Center",
      offset = 10,
      alignOffset = 0,
      content,
      children,
      ...props
    },
    ref
  ) => {
    const baseRef = useRef<HTMLDivElement>(null);

    const positionPopOut = useCallback(() => {
      const baseEl = baseRef.current;
      if (!baseEl || !anchor) return;

      const pCSS = getRelativeFixedPosition(
        anchor,
        baseEl.getBoundingClientRect(),
        position,
        align,
        offset,
        alignOffset
      );
      baseEl.style.top = pCSS.top ?? "unset";
      baseEl.style.bottom = pCSS.bottom ?? "unset";
      baseEl.style.left = pCSS.left ?? "unset";
      baseEl.style.right = pCSS.right ?? "unset";
    }, [anchor, position, align, offset, alignOffset]);

    useEffect(() => {
      window.addEventListener("resize", positionPopOut);
      return () => {
        window.removeEventListener("resize", positionPopOut);
      };
    }, [positionPopOut]);

    useLayoutEffect(() => {
      positionPopOut();
    }, [positionPopOut]);

    return (
      <>
        {children}
        {anchor && (
          <Portal>
            <AsPopOut className={classNames(css.PopOut, className)} {...props} ref={ref}>
              <div ref={baseRef} className={css.PopOutContainer}>
                {content}
              </div>
            </AsPopOut>
          </Portal>
        )}
      </>
    );
  }
);
