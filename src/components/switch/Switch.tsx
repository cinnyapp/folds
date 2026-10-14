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

import React, { ButtonHTMLAttributes, forwardRef } from "react";
import classNames from "classnames";
import { Icon, Icons } from "../icon";
import * as css from "./Switch.css";

type SwitchProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "value" | "onClick" | "onChange" | "children" | "role"
> & {
  value?: boolean;
  onChange?: (on: boolean) => void;
};
export const Switch = forwardRef<HTMLButtonElement, SwitchProps & css.SwitchVariants>(
  ({ className, variant, value = false, onChange, ...props }, ref) => {
    const handleClick = () => onChange?.(!value);

    return (
      <button
        className={classNames(css.Switch({ variant }), className)}
        role="switch"
        type="button"
        aria-checked={value}
        onClick={handleClick}
        {...props}
        ref={ref}
      >
        <span className={css.SwitchThumb} aria-hidden>
          <Icon src={Icons.Check} size="100" />
        </span>
      </button>
    );
  }
);
