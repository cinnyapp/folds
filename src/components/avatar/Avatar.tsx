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
import * as css from "./Avatar.css";

export const Avatar = as<"span", css.AvatarVariants>(
  ({ as: AsAvatar = "span", size, radii, className, ...props }, ref) => (
    <AsAvatar className={classNames(css.Avatar({ size, radii }), className)} {...props} ref={ref} />
  )
);

export const AvatarImage = as<"img">(({ as: AsAvatarImage = "img", className, ...props }, ref) => (
  <AsAvatarImage className={classNames(css.AvatarImage, className)} {...props} ref={ref} />
));

export const AvatarFallback = as<"span">(
  ({ as: AsAvatarFallback = "span", className, ...props }, ref) => (
    <AsAvatarFallback className={classNames(css.AvatarFallback, className)} {...props} ref={ref} />
  )
);
