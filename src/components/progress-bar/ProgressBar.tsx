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
import { percent } from "../util";

import * as css from "./ProgressBar.css";

type ProgressBarProps = {
  value: number;
  min?: number;
  max?: number;
};

export const ProgressBar = as<"span", ProgressBarProps & css.ProgressBarVariant>(
  (
    {
      as: AsProgressBar = "span",
      className,
      variant,
      size,
      fill,
      radii,
      outlined,
      value,
      min = 0,
      max,
      ...props
    },
    ref
  ) => (
    <AsProgressBar
      className={classNames(css.ProgressBar({ variant, size, fill, radii, outlined }), className)}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={min}
      aria-valuemax={max}
      {...props}
      ref={ref}
    >
      {typeof max === "number" ? (
        <span className={css.ProgressBarFill} style={{ width: `${percent(min, max, value)}%` }} />
      ) : (
        <span className={css.ProgressBarPacket} />
      )}
    </AsProgressBar>
  )
);
