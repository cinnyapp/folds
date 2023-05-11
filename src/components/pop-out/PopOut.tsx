import React, {
  MutableRefObject,
  ReactNode,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
} from "react";
import { config } from "../../theme";
import { Portal } from "../portal";
import { Align, getRelativeFixedPosition, Position } from "../util";

export interface PopOutProps {
  open: boolean;
  position?: Position;
  align?: Align;
  offset?: number;
  alignOffset?: number;
  content: ReactNode;
  children: (anchorRef: MutableRefObject<null>) => ReactNode;
}
export const PopOut = ({
  open,
  position = "bottom",
  align = "center",
  offset = 10,
  alignOffset = 0,
  content,
  children,
}: PopOutProps) => {
  const anchorRef = useRef<unknown>(null);
  const popOutRef = useRef<HTMLDivElement>(null);

  const positionPopOut = useCallback(() => {
    const anchor = anchorRef.current as HTMLElement;
    const popOutEl = popOutRef.current;

    const css = getRelativeFixedPosition(
      anchor.getBoundingClientRect(),
      position,
      align,
      offset,
      alignOffset
    );
    if (popOutEl) {
      popOutEl.style.top = css.top;
      popOutEl.style.right = css.right;
      popOutEl.style.bottom = css.bottom;
      popOutEl.style.left = css.left;
      popOutEl.style.transform = css.transform;
    }
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

  return (
    <>
      {children(anchorRef as MutableRefObject<null>)}
      <Portal>
        {open && (
          <div
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              zIndex: config.zIndex.Max,
              pointerEvents: "none",
            }}
          >
            <div
              ref={popOutRef}
              style={{
                display: "inline-block",
                position: "fixed",
                maxWidth: "100vw",
              }}
            >
              {content}
            </div>
          </div>
        )}
      </Portal>
    </>
  );
};
