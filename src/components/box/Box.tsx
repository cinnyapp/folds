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
import React from "react";
import { as } from "../as";

import * as css from "./Box.css";

export const Box = as<"div", css.BoxVariants>(
  (
    {
      as: AsBox = "div",
      className,
      display,
      direction,
      wrap,
      justifyContent,
      justifyItems,
      justifySelf,
      alignContent,
      alignItems,
      alignSelf,
      gap,
      grow,
      shrink,
      basis,
      ...props
    },
    ref
  ) => (
    <AsBox
      className={classNames(
        css.Box({
          display,
          direction,
          wrap,
          justifyContent,
          justifyItems,
          justifySelf,
          alignContent,
          alignItems,
          alignSelf,
          gap,
          grow,
          shrink,
          basis,
        }),
        className
      )}
      {...props}
      ref={ref}
    />
  )
);
