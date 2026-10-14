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

import React, { useLayoutEffect, useRef } from "react";
import classNames from "classnames";
import * as css from "./Scroll.css";
import { as } from "../as";

export const Scroll = as<"div", css.ScrollVariants>(
  (
    { as: AsScroll = "div", className, variant, visibility, hideTrack, size, direction, ...props },
    ref
  ) => {
    const scrollLocalRef = useRef<HTMLDivElement>();

    useLayoutEffect(() => {
      if (scrollLocalRef.current) {
        const $scroll = scrollLocalRef.current;
        if (size === "0") {
          $scroll.setAttribute("data-x-scrollbar-width", "0");
          $scroll.setAttribute("data-y-scrollbar-width", "0");
        } else {
          const xScrollbarWidth = $scroll.offsetHeight - $scroll.clientHeight;
          const yScrollbarWidth = $scroll.offsetWidth - $scroll.clientWidth;

          $scroll.setAttribute("data-x-scrollbar-width", `${xScrollbarWidth}`);
          $scroll.setAttribute("data-y-scrollbar-width", `${yScrollbarWidth}`);
        }
      }
    }, [size]);

    return (
      <AsScroll
        className={classNames(
          css.Scroll({
            variant,
            visibility,
            hideTrack,
            size,
            direction,
          }),
          className
        )}
        {...props}
        ref={(r) => {
          if (r) scrollLocalRef.current = r;
          if (ref) {
            if ("current" in ref) {
              const propRef: any = ref;
              propRef.current = r;
            }
            if (typeof ref === "function") {
              ref(r);
            }
          }
        }}
      />
    );
  }
);
