import React, {
  ReactNode,
  RefCallback,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
} from "react";
import { config } from "../../theme";
import { as } from "../as";
import { Portal } from "../portal";
import { Align, getRelativeFixedPosition, Position } from "../util";

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
      open,
      position = "Bottom",
      align = "Center",
      offset = 10,
      alignOffset = 0,
      content,
      children,
      style,
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

      const css = getRelativeFixedPosition(
        anchor.getBoundingClientRect(),
        position,
        align,
        offset,
        alignOffset,
        baseEl.getBoundingClientRect()
      );
      baseEl.style.top = css.top;
      baseEl.style.bottom = css.bottom;
      baseEl.style.left = css.left;
      baseEl.style.right = css.right;
      baseEl.style.transform = css.transform;
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
            <AsPopOut
              style={{
                position: "fixed",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                zIndex: config.zIndex.Max,
                ...style,
              }}
              {...props}
              ref={ref}
            >
              <div
                ref={baseRef}
                style={{
                  display: "inline-block",
                  position: "fixed",
                  maxWidth: "100vw",
                  maxHeight: "100vh",
                }}
              >
                {content}
              </div>
            </AsPopOut>
          )}
        </Portal>
      </>
    );
  }
);
