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

import { style } from "@vanilla-extract/css";
import { config } from "../theme/config.css";

export const RadiiVariant = {
  Inherit: style({
    borderRadius: "inherit",
  }),
  "0": style({
    borderRadius: config.radii.R0,
  }),
  "300": style({
    borderRadius: config.radii.R300,
  }),
  "400": style({
    borderRadius: config.radii.R400,
  }),
  "500": style({
    borderRadius: config.radii.R500,
  }),
  Pill: style({
    borderRadius: config.radii.Pill,
  }),
};

export const CrossSizeVariant = {
  Inherit: style({
    width: config.size.XInherit,
    height: config.size.XInherit,
  }),
  "50": style({
    width: config.size.X50,
    height: config.size.X50,
  }),
  "100": style({
    width: config.size.X100,
    height: config.size.X100,
  }),
  "200": style({
    width: config.size.X200,
    height: config.size.X200,
  }),
  "300": style({
    width: config.size.X300,
    height: config.size.X300,
  }),
  "400": style({
    width: config.size.X400,
    height: config.size.X400,
  }),
  "500": style({
    width: config.size.X500,
    height: config.size.X500,
  }),
  "600": style({
    width: config.size.X600,
    height: config.size.X600,
  }),
};
