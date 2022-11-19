import React, {
  MutableRefObject,
  ReactElement,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Box } from "../box";
import { Portal } from "../portal";
import { Align, getRelativeFixedPosition, Position } from "../util";

interface PopOutProps {
  position?: Position;
  align?: Align;
  offset?: number;
  content: ReactNode;
  children: (
    anchorRef: MutableRefObject<null>,
    open: boolean,
    toggleOpen: (value?: boolean) => void
  ) => ReactElement;
}
export const PopOut = ({
  position = "bottom",
  align = "center",
  offset = 10,
  content,
  children,
}: PopOutProps) => {
  const anchorRef = useRef<unknown>(null);
  const popOutRef = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(false);

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

  const triggerPopOut = (state: boolean) => {
    if (state) {
      positionPopOut();
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  const toggleOpen = (value?: boolean) => {
    triggerPopOut(value ?? !open);
  };

  useEffect(() => {
    window.addEventListener("resize", positionPopOut);
    return () => {
      window.removeEventListener("resize", positionPopOut);
    };
  }, [positionPopOut]);

  return (
    <>
      {children(anchorRef as MutableRefObject<null>, open, toggleOpen)}
      <Portal>
        <Box
          ref={popOutRef}
          css={{
            display: "inline-block",
            position: "fixed",
            maxWidth: "100vw",
            zIndex: "$200",
            pointerEvents: "none",
          }}
        >
          {open && content}
        </Box>
      </Portal>
    </>
  );
};
