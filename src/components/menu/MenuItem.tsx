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
import React, { ReactNode } from "react";
import { as } from "../as";
import * as css from "./MenuItem.css";

type MenuItemProps = {
  before?: ReactNode;
  after?: ReactNode;
};

export const MenuItem = as<"button", MenuItemProps & css.MenuItemVariants>(
  (
    {
      as: AsMenuItem = "button",
      className,
      variant,
      fill,
      size,
      radii,
      before,
      after,
      children,
      ...props
    },
    ref
  ) => (
    <AsMenuItem
      className={classNames(css.MenuItem({ variant, fill, size, radii }), className)}
      data-ui-before={before ? true : undefined}
      data-ui-after={after ? true : undefined}
      {...props}
      ref={ref}
    >
      {before}
      {children}
      {after}
    </AsMenuItem>
  )
);
