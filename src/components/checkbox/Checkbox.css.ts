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
