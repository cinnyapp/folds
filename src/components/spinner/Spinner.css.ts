import { ComplexStyleRule, createVar, keyframes, style } from "@vanilla-extract/css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { color } from "../../theme/color.css";
import { DefaultReset } from "../reset.css";
import { MainColor } from "../types";
import { CrossSizeVariant } from "../variant.css";

const MainLine = createVar();
const OnMain = createVar();
const ContainerLine = createVar();
const OnContainer = createVar();

const SpinnerOuterColor = createVar();
const SpinnerInnerColor = createVar();

const SpinnerSpinAnime = keyframes({
  to: {
    transform: "rotate(1turn)",
  },
});

const getVariant = (variant: MainColor): ComplexStyleRule => ({
  vars: {
    [MainLine]: color[variant].MainLine,
    [OnMain]: color[variant].OnMain,
    [ContainerLine]: color[variant].ContainerLine,
    [OnContainer]: color[variant].OnContainer,
  },
});

export const Spinner = recipe({
  base: [
    DefaultReset,
    {
      flexShrink: 0,
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
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
    fill: {
      Solid: {
        vars: {
          [SpinnerOuterColor]: MainLine,
          [SpinnerInnerColor]: OnMain,
        },
      },
      Soft: {
        vars: {
          [SpinnerOuterColor]: ContainerLine,
          [SpinnerInnerColor]: OnContainer,
        },
      },
    },
  },
  defaultVariants: {
    size: "400",
    variant: "Secondary",
    fill: "Soft",
  },
});

export type SpinnerVariants = RecipeVariants<typeof Spinner>;

export const SpinnerSvg = style([
  DefaultReset,
  {
    width: "100%",
    height: "100%",
    animation: `${SpinnerSpinAnime} 1.2s cubic-bezier(0.73, 0.32, 0.67, 0.86) infinite`,
  },
]);

export const SpinnerOuter = style({
  fill: SpinnerOuterColor,
});

export const SpinnerInner = style({
  fill: SpinnerInnerColor,
});
