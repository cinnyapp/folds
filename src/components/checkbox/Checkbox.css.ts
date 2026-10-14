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
import { DefaultReset } from "../reset.css";
import { Disabled, FocusOutline } from "../selectorPreset.css";
import { MainColor } from "../types";
import { CrossSizeVariant } from "../variant.css";

const Main = createVar();
const OnMain = createVar();

const getVariant = (variant: MainColor): ComplexStyleRule => ({
  vars: {
    [Main]: color[variant].Main,
    [OnMain]: color[variant].OnMain,
  },
});

export const Checkbox = recipe({
  base: [
    DefaultReset,
    {
      flexShrink: "0",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
    },
  ],
  variants: {
    size: CrossSizeVariant,
    variant: {
      Primary: getVariant("Primary"),
      Secondary: getVariant("Secondary"),
      Success: getVariant("Success"),
      Warning: getVariant("Warning"),
      Critical: getVariant("Critical"),
    },
  },
  defaultVariants: {
    size: "400",
    variant: "Secondary",
  },
});

export type CheckboxVariants = RecipeVariants<typeof Checkbox>;

export const CheckboxInput = style([
  DefaultReset,
  {
    position: "absolute",
    width: "100%",
    height: "100%",
    selectors: {
      "&[type=checkbox]": {
        appearance: "none",
        margin: 0,
        padding: 0,
        cursor: "pointer",
        borderRadius: config.radii.R300,
        boxShadow: `inset 0 0 0 ${config.borderWidth.B400} CurrentColor`,
      },
      "&[type=checkbox]:checked": {
        boxShadow: "none",
        backgroundColor: Main,
      },
      "&:not(:checked)": {
        opacity: config.opacity.P300,
      },
    },
  },
  FocusOutline,
  Disabled,
]);

export const CheckboxIcon = style({
  position: "absolute",
  pointerEvents: "none",
  color: "transparent",
  selectors: {
    [`${CheckboxInput}:checked + &`]: {
      color: OnMain,
    },
    [`${CheckboxInput}[disabled] + &, ${CheckboxInput}[aria-disabled=true] + &`]: {
      opacity: config.opacity.Disabled,
    },
  },
});
