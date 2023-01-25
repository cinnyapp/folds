import { ComplexStyleRule, createVar, style } from "@vanilla-extract/css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { color } from "../../theme/color.css";
import { config } from "../../theme/config.css";
import { toRem } from "../../theme/util";
import { DefaultReset } from "../reset.css";
import { Disabled } from "../selectorPreset.css";
import { ContainerColor } from "../types";
import { RadiiVariant } from "../variant.css";

const Container = createVar();
const ContainerHover = createVar();
const ContainerActive = createVar();
const ContainerLine = createVar();
const OnContainer = createVar();

const FontSize = createVar();
const LineHeight = createVar();
const LetterSpacing = createVar();

const getVariant = (variant: ContainerColor): ComplexStyleRule => ({
  vars: {
    [Container]: color[variant].Container,
    [ContainerHover]: color[variant].ContainerHover,
    [ContainerActive]: color[variant].ContainerActive,
    [ContainerLine]: color[variant].ContainerLine,
    [OnContainer]: color[variant].OnContainer,
  },
});

export const Input = recipe({
  base: [
    DefaultReset,
    {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      color: OnContainer,
      backgroundColor: Container,

      selectors: {
        "&:has(input:focus)": {
          boxShadow: `inset 0 0 0 ${config.borderWidth.B600} ${ContainerLine}`,
        },
      },
      "@supports": {
        "not selector(:has(input:focus))": {
          ":focus-within": {
            boxShadow: `inset 0 0 0 ${config.borderWidth.B600} ${ContainerLine}`,
          },
        },
      },
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
      "300": {
        vars: {
          [FontSize]: config.fontSize.T200,
          [LineHeight]: config.lineHeight.T200,
          [LetterSpacing]: config.letterSpacing.T200,
        },
        padding: `0 ${config.space.S200}`,
        gap: config.space.S100,
        height: toRem(32),
      },
      "400": {
        vars: {
          [FontSize]: config.fontSize.T300,
          [LineHeight]: config.lineHeight.T300,
          [LetterSpacing]: config.letterSpacing.T300,
        },
        padding: `0 ${config.space.S300}`,
        gap: config.space.S200,
        height: toRem(40),
      },
      "500": {
        vars: {
          [FontSize]: config.fontSize.T400,
          [LineHeight]: config.lineHeight.T400,
          [LetterSpacing]: config.letterSpacing.T400,
        },
        padding: `0 ${config.space.S400}`,
        gap: config.space.S300,
        height: toRem(48),
      },
    },
    outlined: {
      true: {
        boxShadow: `inset 0 0 0 ${config.borderWidth.B400} ${ContainerLine}`,
      },
    },
    radii: RadiiVariant,
  },
  defaultVariants: {
    variant: "Background",
    size: "400",
    radii: "400",
  },
});

export type InputVariants = RecipeVariants<typeof Input>;

export const InputInput = style([
  DefaultReset,
  {
    height: "100%",
    minWidth: 0,
    flexGrow: 1,
    backgroundColor: "transparent",

    fontWeight: 400,
    fontSize: FontSize,
    lineHeight: LineHeight,
    letterSpacing: LetterSpacing,

    selectors: {
      "&:focus": {
        outline: "none",
      },
      "&::placeholder": {
        color: "inherit",
        opacity: config.opacity.Placeholder,
      },
    },
  },
  Disabled,
]);
