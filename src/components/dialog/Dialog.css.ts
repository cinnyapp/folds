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

import { ComplexStyleRule, keyframes } from "@vanilla-extract/css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { color } from "../../theme/color.css";
import { config } from "../../theme/config.css";
import { DefaultReset } from "../reset.css";
import { ContainerColor } from "../types";

const getVariant = (variant: ContainerColor): ComplexStyleRule => ({
  backgroundColor: color[variant].Container,
  color: color[variant].OnContainer,
  border: `${config.borderWidth.B300} solid ${color[variant].ContainerLine}`,
});

const DialogOpenAnime = keyframes({
  "0%": {
    transform: "translateY(5px)",
  },
  "100%": {
    transform: "translateY(0)",
  },
});

export const Dialog = recipe({
  base: [
    DefaultReset,
    {
      borderRadius: config.radii.R400,
      boxShadow: config.shadow.E400,
      width: "100%",
      maxWidth: config.size.DialogWidth,
      overflow: "hidden",
      animation: `${DialogOpenAnime} 200ms`,
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
  },
  defaultVariants: {
    variant: "Surface",
  },
});

export type DialogVariants = RecipeVariants<typeof Dialog>;
