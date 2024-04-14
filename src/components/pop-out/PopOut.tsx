import classNames from "classnames";
import React, {
  ReactNode,
  RefCallback,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
} from "react";
import { as } from "../as";
import { Portal } from "../portal";
import { Align, getRelativeFixedPosition, Position } from "../util";
import * as css from "./PopOut.css";

export interface PopOutProps {
  open: boolean;
  position?: Position;
  align?: Align;
  offset?: number;
  alignOffset?: number;
  content: ReactNode;
  children: (anchorRef: RefCallback<HTMLElement | SVGElement>) => ReactNode;
}
export const PopOut = as<"div", PopOutProps>(
  (
    {
      as: AsPopOut = "div",
      className,
      open,
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
    const anchorRef = useRef<HTMLElement | SVGElement | null>(null);
    const baseRef = useRef<HTMLDivElement>(null);

    const positionPopOut = useCallback(() => {
      const anchor = anchorRef.current;
      const baseEl = baseRef.current;
      if (!anchor) return;
      if (!baseEl) return;

      const pCSS = getRelativeFixedPosition(
        anchor.getBoundingClientRect(),
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
    }, [position, align, offset, alignOffset]);

    useEffect(() => {
      window.addEventListener("resize", positionPopOut);
      return () => {
        window.removeEventListener("resize", positionPopOut);
      };
    }, [positionPopOut]);

    useLayoutEffect(() => {
      if (open) positionPopOut();
    }, [open, positionPopOut]);

    const handleAnchorRef: RefCallback<HTMLElement | SVGElement> = useCallback((element) => {
      anchorRef.current = element;
    }, []);

    return (
      <>
        {children(handleAnchorRef)}
        <Portal>
          {open && (
            <AsPopOut className={classNames(css.PopOut, className)} {...props} ref={ref}>
              <div ref={baseRef} className={css.PopOutContainer}>
                {content}
              </div>
            </AsPopOut>
          )}
        </Portal>
      </>
    );
  }
);
