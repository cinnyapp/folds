import React, { ReactNode } from "react";
import { createPortal } from "react-dom";

export type PortalProps = {
  container?: Element | DocumentFragment;
  children: ReactNode | ReactNode[];
};
export const Portal = ({ container, children }: PortalProps) => (
  <>{createPortal(children, container ?? document.body)}</>
);
