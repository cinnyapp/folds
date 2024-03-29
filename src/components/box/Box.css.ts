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
