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

export const TextReset = style({
  color: "inherit",
  fontFamily: "inherit",
  fontSize: "inherit",
  lineHeight: "inherit",
  letterSpacing: "inherit",
});

export const DefaultReset = style([
  TextReset,
  {
    margin: 0,
    padding: 0,
    border: "0 solid currentColor",
    boxShadow: "none",

    appearance: "none",
    WebkitTapHighlightColor: "transparent",

    selectors: {
      "&, &::before, &::after": {
        boxSizing: "border-box",
      },
    },
  },
]);
