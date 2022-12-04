import React, { forwardRef, HTMLAttributes, ReactNode } from "react";
import { CSS, keyframes, styled } from "../../config";
import { Portal } from "../portal";

const StyledOverlay = styled("div", {
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: "$400",
});

const OverlayBackDropAnime = keyframes({
  "0%": {
    opacity: "0",
  },
  "100%": {
    opacity: ".5",
  },
});

export const OverlayBackDrop = styled("div", {
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: -1,
  backgroundColor: "black",
  opacity: ".5",
  animation: `${OverlayBackDropAnime} 100ms`,
});

export const OverlayCenter = styled("div", {
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

interface OverlayProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  css?: CSS;
  open: boolean;
  backdrop?: ReactNode;
  children?: ReactNode;
}

export const Overlay = forwardRef<HTMLDivElement, OverlayProps>(
  ({ open, backdrop, children, ...props }, ref) => (
    <Portal>
      {open ? (
        <StyledOverlay {...props} ref={ref}>
          {backdrop}
          {children}
        </StyledOverlay>
      ) : null}
    </Portal>
  )
);
