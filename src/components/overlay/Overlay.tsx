/*
Cinny Project
Copyright 2022-present Ajay Bura
SPDX-License-Identifier: Apache-2.0
https://cinny.in

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import React, { createContext, ReactNode, useContext } from "react";
import classNames from "classnames";
import * as css from "./Overlay.css";
import { Portal } from "../portal";
import { as } from "../as";

const OverlayContainerContext = createContext<Element | DocumentFragment | undefined>(undefined);
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
