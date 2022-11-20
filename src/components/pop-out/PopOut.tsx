import React, {
  MutableRefObject,
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
  content: (open: boolean, toggleOpen: (value?: boolean) => void) => ReactNode;
  children: (
    anchorRef: MutableRefObject<null>,
    open: boolean,
    toggleOpen: (value?: boolean) => void
  ) => ReactNode;
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

  const triggerPopOut = useCallback(
    (state: boolean) => {
      if (state) {
        positionPopOut();
        setOpen(true);
      } else {
        setOpen(false);
      }
    },
    [positionPopOut]
  );

  const toggleOpen = (value?: boolean) => {
    triggerPopOut(value ?? !open);
  };

  useEffect(() => {
    const handleKeyDown = (evt: KeyboardEvent) => {
      if (evt.key === "Escape") {
        evt.preventDefault();
        triggerPopOut(false);
      }
    };
    const handleClickOutside = (evt: MouseEvent) => {
      if (
        evt.target === anchorRef.current ||
        (anchorRef.current as HTMLElement)?.contains(evt.target as Node)
      )
        return;
      if (popOutRef.current?.contains(evt.target as Node)) return;
      triggerPopOut(false);
    };

    window.addEventListener("resize", positionPopOut);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("resize", positionPopOut);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [positionPopOut, triggerPopOut]);

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
          }}
        >
          {open && content(open, toggleOpen)}
        </Box>
      </Portal>
    </>
  );
};
