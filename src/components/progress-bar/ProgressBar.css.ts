import { ComplexStyleRule, createVar, style } from "@vanilla-extract/css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { color, config, toRem } from "../../theme";
import { DefaultReset } from "../reset.css";
import { Disabled } from "../selectorPreset.css";
import { MainColor } from "../types";
import { RadiiVariant } from "../variant.css";

const MainLine = createVar();
const Main = createVar();
const ContainerLine = createVar();
const Container = createVar();

const getVariant = (variant: MainColor): ComplexStyleRule => ({
  vars: {
    [MainLine]: color[variant].MainLine,
    [Main]: color[variant].Main,
    [ContainerLine]: color[variant].ContainerLine,
    [Container]: color[variant].Container,
  },
});

export const ProgressBar = recipe({
  base: [
    DefaultReset,
    Disabled,
    {
      display: "flex",
      overflow: "hidden",
    },
  ],
  variants: {
    size: {
      "300": {
        height: toRem(8),
      },
      "400": {
        height: toRem(12),
      },
      "500": {
        height: toRem(14),
      },
    },
    variant: {
      Primary: getVariant("Primary"),
      Secondary: getVariant("Secondary"),
      Success: getVariant("Success"),
      Warning: getVariant("Warning"),
      Critical: getVariant("Critical"),
    },
    fill: {
      Solid: {
        backgroundColor: Main,
        borderColor: MainLine,
        color: Container,
      },
      Soft: {
        backgroundColor: Container,
        borderColor: ContainerLine,
        color: Main,
      },
      None: {
        backgroundColor: "inherit",
        borderColor: Main,
        color: Main,
      },
    },
    radii: RadiiVariant,
    outlined: {
      true: {
        borderWidth: config.borderWidth.B300,
      },
    },
  },
  defaultVariants: {
    variant: "Secondary",
    size: "400",
    fill: "Soft",
    radii: "Pill",
  },
});

export type ProgressBarVariant = RecipeVariants<typeof ProgressBar>;

export const ProgressBarFill = style([
  DefaultReset,
  {
    display: "inline-block",
    backgroundColor: "currentcolor",
    height: "100%",
  },
]);
