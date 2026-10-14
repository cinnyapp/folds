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

import { ComplexStyleRule, keyframes, style } from "@vanilla-extract/css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { color } from "../../theme/color.css";
import { config } from "../../theme/config.css";
import { toRem } from "../../theme/util";
import { DefaultReset } from "../reset.css";
import { ContainerColor } from "../types";
import { RadiiVariant } from "../variant.css";

const getVariant = (variant: ContainerColor): ComplexStyleRule => ({
  backgroundColor: color[variant].Container,
  color: color[variant].OnContainer,
  border: `${config.borderWidth.B300} solid ${color[variant].ContainerLine}`,
});

const TooltipScaleAnime = keyframes({
  "0%": {
    transform: "translateY(2px)",
  },
  "100%": {
    transform: "translateY(0)",
  },
});

export const Tooltip = recipe({
  base: [
    DefaultReset,
    {
      padding: `${toRem(6)} ${config.space.S300}`,
      boxShadow: config.shadow.E200,
      display: "inline-flex",
      alignItems: "center",
      animation: `${TooltipScaleAnime} 100ms`,
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
    radii: RadiiVariant,
  },
  defaultVariants: {
    variant: "Surface",
    radii: "400",
  },
});

export type TooltipVariants = RecipeVariants<typeof Tooltip>;

export const TooltipProvider = style({
  display: "inline-block",
  position: "fixed",
  maxWidth: "100vw",
  maxHeight: "100vh",
  zIndex: config.zIndex.Max,
  pointerEvents: "none",
});
