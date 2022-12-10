import React, { MutableRefObject, ReactNode, useCallback, useEffect, useRef } from "react";
import { Box } from "../box";
import { Portal } from "../portal";
import { Align, getRelativeFixedPosition, Position } from "../util";

interface PopOutProps {
  open: boolean;
  position?: Position;
  align?: Align;
  offset?: number;
  content: ReactNode;
  children: (anchorRef: MutableRefObject<null>) => ReactNode;
}
export const PopOut = ({
  open,
  position = "bottom",
  align = "center",
  offset = 10,
  content,
  children,
}: PopOutProps) => {
  const anchorRef = useRef<unknown>(null);
  const popOutRef = useRef<HTMLDivElement>(null);

  const positionPopOut = useCallback(() => {
    const anchor = anchorRef.current as HTMLElement;
    const popOutEl = popOutRef.current;

    const css = getRelativeFixedPosition(anchor, position, align, offset);
    if (popOutEl) {
      popOutEl.style.top = css.top;
      popOutEl.style.right = css.right;
      popOutEl.style.bottom = css.bottom;
      popOutEl.style.left = css.left;
      popOutEl.style.transform = css.transform;
    }
  }, [position, align, offset]);

  useEffect(() => {
    window.addEventListener("resize", positionPopOut);
    return () => {
      window.removeEventListener("resize", positionPopOut);
    };
  }, [positionPopOut]);

  useEffect(() => {
    if (open) positionPopOut();
  }, [open, positionPopOut]);

  return (
    <>
      {children(anchorRef as MutableRefObject<null>)}
      <Portal>
        {open && (
          <Box
            css={{
              position: "fixed",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              zIndex: "$Max",
            }}
          >
            <Box
              ref={popOutRef}
              css={{
                display: "inline-block",
                position: "fixed",
                maxWidth: "100vw",
              }}
            >
              {content}
            </Box>
          </Box>
        )}
      </Portal>
    </>
  );
};
