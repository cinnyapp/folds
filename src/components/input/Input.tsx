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

import React, { AllHTMLAttributes, forwardRef, ReactNode } from "react";
import classNames from "classnames";
import * as css from "./Input.css";

type InputProps = Omit<AllHTMLAttributes<HTMLInputElement>, "size"> & {
  before?: ReactNode;
  after?: ReactNode;
  inputSize?: number;
};

export const Input = forwardRef<HTMLInputElement, InputProps & css.InputVariants>(
  (
    { className, style, variant, size, inputSize = 1, outlined, radii, before, after, ...props },
    ref
  ) => (
    <div
      className={classNames(css.Input({ variant, size, outlined, radii }), className)}
      style={style}
      data-ui-before={before ? true : undefined}
      data-ui-after={after ? true : undefined}
    >
      {before}
      <input className={css.InputInput} size={inputSize} {...props} ref={ref} />
      {after}
    </div>
  )
);
