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

import { ComplexStyleRule } from "@vanilla-extract/css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { color } from "../../theme/color.css";
import { toRem } from "../../theme/util";
import { DefaultReset } from "../reset.css";
import { ContainerColor } from "../types";

const getVariant = (variant: ContainerColor): ComplexStyleRule => ({
  color: color[variant].OnContainer,
  border: `0 solid ${color[variant].ContainerLine}`,
});

export const Header = recipe({
  base: [
    DefaultReset,
    {
      display: "flex",
      alignItems: "center",
      flexShrink: 0,
    },
  ],
  variants: {
    variant: {
      Background: getVariant("Background"),
      Surface: getVariant("Surface"),
      SurfaceVariant: getVariant("SurfaceVariant"),
      Primary: getVariant("Primary"),
      Secondary: getVariant("Secondary"),
      Success: getVariant("Success"),
      Warning: getVariant("Warning"),
      Critical: getVariant("Critical"),
    },
    size: {
      "300": { height: toRem(32) },
      "400": { height: toRem(40) },
      "500": { height: toRem(48) },
      "600": { height: toRem(54) },
      "700": { height: toRem(64) },
    },
  },
  defaultVariants: {
    variant: "Surface",
    size: "400",
  },
});

export type HeaderVariants = RecipeVariants<typeof Header>;
