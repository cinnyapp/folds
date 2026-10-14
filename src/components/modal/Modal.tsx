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

import React from "react";
import classNames from "classnames";
import * as css from "./Modal.css";
import { as } from "../as";

export const Modal = as<"div", css.ModalVariants>(
  ({ as: AsModal = "div", className, variant, size, flexHeight, ...props }, ref) => (
    <AsModal
      className={classNames(css.Modal({ variant, size, flexHeight }), className)}
      {...props}
      ref={ref}
    />
  )
);
