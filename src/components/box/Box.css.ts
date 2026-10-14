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

import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { config } from "../../theme/config.css";
import { DefaultReset } from "../reset.css";

const getAlignContentVariant = (prop: "justifyContent" | "alignContent") => ({
  Inherit: { [prop]: "inherit" },
  Start: { [prop]: "flex-start" },
  End: { [prop]: "flex-end" },
  Stretch: { [prop]: "stretch" },
  Center: { [prop]: "center" },
  Baseline: { [prop]: "baseline" },
  SpaceBetween: { [prop]: "space-between" },
  SpaceAround: { [prop]: "space-around" },
  SpaceEvenly: { [prop]: "space-evenly" },
});
const getAlignItemVariant = (
  prop: "justifyItems" | "justifySelf" | "alignItems" | "alignSelf"
) => ({
  Inherit: { [prop]: "inherit" },
  Start: { [prop]: "flex-start" },
  End: { [prop]: "flex-end" },
  Stretch: { [prop]: "stretch" },
  Center: { [prop]: "center" },
  Baseline: { [prop]: "baseline" },
});

export const Box = recipe({
  base: [
    DefaultReset,
    {
      minWidth: 0,
      minHeight: 0,
    },
  ],
  variants: {
    display: {
      Flex: { display: "flex" },
      InlineFlex: { display: "inline-flex" },
    },
    direction: {
      Inherit: { flexDirection: "inherit" },
      Row: { flexDirection: "row" },
      RowReverse: { flexDirection: "row-reverse" },
      Column: { flexDirection: "column" },
      ColumnReverse: { flexDirection: "column-reverse" },
    },
    wrap: {
      Inherit: { flexWrap: "inherit" },
      NoWrap: { flexWrap: "nowrap" },
      Wrap: { flexWrap: "wrap" },
      WrapReverse: { flexWrap: "wrap-reverse" },
    },
    justifyContent: getAlignContentVariant("justifyContent"),
    justifyItems: getAlignItemVariant("justifyItems"),
    justifySelf: getAlignItemVariant("justifySelf"),
    alignContent: getAlignContentVariant("alignContent"),
    alignItems: getAlignItemVariant("alignItems"),
    alignSelf: getAlignItemVariant("alignSelf"),
    gap: {
      Inherit: { gap: "inherit" },
      "0": { gap: config.space.S0 },
      "100": { gap: config.space.S100 },
      "200": { gap: config.space.S200 },
      "300": { gap: config.space.S300 },
      "400": { gap: config.space.S400 },
      "500": { gap: config.space.S500 },
      "600": { gap: config.space.S600 },
      "700": { gap: config.space.S700 },
    },
    grow: {
      No: { flexGrow: 0 },
      Yes: { flexGrow: 1 },
    },
    shrink: {
      No: { flexShrink: 0 },
      Yes: { flexShrink: 1 },
    },
    basis: {
      No: { flexBasis: 0 },
      Yes: { flexBasis: "auto" },
    },
  },
  defaultVariants: {
    display: "Flex",
  },
});

export type BoxVariants = RecipeVariants<typeof Box>;
