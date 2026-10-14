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

import React, { forwardRef, SVGAttributes } from "react";
import classNames from "classnames";
import * as css from "./Icon.css";

import { IconSrc } from "./Icons";

export type IconProps = SVGAttributes<SVGElement> & {
  filled?: boolean;
  src: IconSrc;
};
export const Icon = forwardRef<SVGSVGElement, IconProps & css.IconVariants>(
  ({ className, size, filled = false, src, ...props }, ref) => (
    <svg
      className={classNames(css.Icon({ size }), className)}
      focusable="false"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      ref={ref}
    >
      {src(filled)}
    </svg>
  )
);
