import React, { createContext, ReactNode, useContext } from "react";
import classNames from "classnames";
import * as css from "./Overlay.css";
import { Portal } from "../portal";
import { as } from "../as";

export const OverlayContainerContext = createContext<Element | DocumentFragment | undefined>(
  undefined
);
export const OverlayContainerProvider = OverlayContainerContext.Provider;
export const useOverlayContainer = (): Element | DocumentFragment | undefined => {
  const container = useContext(OverlayContainerContext);

  return container;
};

export type OverlayProps = {
  open: boolean;
  container?: Element | DocumentFragment;
  backdrop?: ReactNode;
};

export const Overlay = as<"div", OverlayProps>(
  ({ as: AsOverlay = "div", className, open, container, backdrop, children, ...props }, ref) => {
    const contextContainer = useOverlayContainer();

    return (
      <Portal container={container ?? contextContainer}>
        {open ? (
          <AsOverlay className={classNames(css.Overlay, className)} {...props} ref={ref}>
            {backdrop}
            {children}
          </AsOverlay>
        ) : null}
      </Portal>
    );
  }
);

export const OverlayBackdrop = as<"div">(
  ({ as: AsOverlayBackdrop = "div", className, ...props }, ref) => (
    <AsOverlayBackdrop
      className={classNames(css.OverlayBackdrop, className)}
      {...props}
      ref={ref}
    />
  )
);

export const OverlayCenter = as<"div">(
  ({ as: AsOverlayCenter = "div", className, ...props }, ref) => (
    <AsOverlayCenter className={classNames(css.OverlayCenter, className)} {...props} ref={ref} />
  )
);
