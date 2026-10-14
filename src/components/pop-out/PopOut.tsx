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

import classNames from "classnames";
import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
} from "react";
import { as } from "../as";
import { Portal } from "../portal";
import { Align, getRelativeFixedPosition, Position, RectCords } from "../util";
import * as css from "./PopOut.css";

const PopOutContainerContext = createContext<Element | DocumentFragment | undefined>(undefined);
export const PopOutContainerProvider = PopOutContainerContext.Provider;
export const usePopOutContainer = (): Element | DocumentFragment | undefined => {
  const container = useContext(PopOutContainerContext);

  return container;
};

export interface PopOutProps {
  anchor?: RectCords;
  position?: Position;
  align?: Align;
  offset?: number;
  alignOffset?: number;
  content: ReactNode;
  container?: Element | DocumentFragment;
}
export const PopOut = as<"div", PopOutProps>(
  (
    {
      as: AsPopOut = "div",
      className,
      anchor,
      position = "Bottom",
      align = "Center",
      offset = 10,
      alignOffset = 0,
      content,
      children,
      container,
      ...props
    },
    ref
  ) => {
    const baseRef = useRef<HTMLDivElement>(null);
    const contextContainer = usePopOutContainer();

    const positionPopOut = useCallback(() => {
      const baseEl = baseRef.current;
      if (!baseEl || !anchor) return;

      const pCSS = getRelativeFixedPosition(
        anchor,
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
    }, [anchor, position, align, offset, alignOffset]);

    useEffect(() => {
      window.addEventListener("resize", positionPopOut);
      return () => {
        window.removeEventListener("resize", positionPopOut);
      };
    }, [positionPopOut]);

    useLayoutEffect(() => {
      positionPopOut();
    }, [positionPopOut]);

    return (
      <>
        {children}
        {anchor && (
          <Portal container={container ?? contextContainer}>
            <AsPopOut className={classNames(css.PopOut, className)} {...props} ref={ref}>
              <div ref={baseRef} className={css.PopOutContainer}>
                {content}
              </div>
            </AsPopOut>
          </Portal>
        )}
      </>
    );
  }
);
