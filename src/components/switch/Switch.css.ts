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

import { ComplexStyleRule, createVar, style } from "@vanilla-extract/css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { color } from "../../theme/color.css";
import { config } from "../../theme/config.css";
import { toRem } from "../../theme/util";
import { DefaultReset } from "../reset.css";
import { Disabled, FocusOutline } from "../selectorPreset.css";
import { MainColor } from "../types";

const Main = createVar();
const OnMain = createVar();

const getVariant = (variant: MainColor): ComplexStyleRule => ({
  vars: {
    [Main]: color[variant].Main,
    [OnMain]: color[variant].OnMain,
  },
});

const SwitchBase = style({
  flexShrink: "0",
  display: "inline-flex",
  alignItems: "center",
  width: toRem(44),
  height: toRem(24),
  boxShadow: `inset 0 0 0 ${config.borderWidth.B400} CurrentColor`,
  color: "CurrentColor",
  backgroundColor: "transparent",
  borderRadius: config.radii.Pill,
  cursor: "pointer",

  selectors: {
    "&[aria-checked=false]": {
      opacity: config.opacity.P300,
    },
    "&[aria-checked=true]": {
      backgroundColor: Main,
      color: OnMain,
      boxShadow: "none",
    },
  },
});

export const Switch = recipe({
  base: [DefaultReset, SwitchBase, FocusOutline, Disabled],
  variants: {
    variant: {
      Primary: getVariant("Primary"),
      Secondary: getVariant("Secondary"),
      Success: getVariant("Success"),
      Warning: getVariant("Warning"),
      Critical: getVariant("Critical"),
    },
  },
  defaultVariants: {
    variant: "Primary",
  },
});

export type SwitchVariants = RecipeVariants<typeof Switch>;

export const SwitchThumb = style([
  DefaultReset,
  {
    width: toRem(14),
    height: toRem(14),
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",

    transform: `translateX(${toRem(5)})`,
    backgroundColor: "CurrentColor",
    borderRadius: config.radii.Pill,

    selectors: {
      [`${SwitchBase}[aria-checked=true] &`]: {
        width: toRem(18),
        height: toRem(18),
        transform: `translateX(${toRem(23)})`,
        backgroundColor: OnMain,
        color: Main,
      },
    },
  },
]);
