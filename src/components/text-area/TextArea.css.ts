import { ComplexStyleRule, createVar } from "@vanilla-extract/css";
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
const BorderWidth = createVar();

const getVariant = (variant: ContainerColor): ComplexStyleRule => ({
  vars: {
    [Container]: color[variant].Container,
    [ContainerHover]: color[variant].ContainerHover,
    [ContainerActive]: color[variant].ContainerActive,
    [ContainerLine]: color[variant].ContainerLine,
    [OnContainer]: color[variant].OnContainer,
  },
});

export const TextArea = recipe({
  base: [
    DefaultReset,
    {
      vars: {
        [BorderWidth]: config.borderWidth.B400,
      },
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      minWidth: 0,
      width: "100%",
      maxWidth: "100%",
      flexGrow: 1,

      color: OnContainer,
      backgroundColor: Container,

      fontSize: FontSize,
      lineHeight: LineHeight,
      letterSpacing: LetterSpacing,

      scrollbarColor: `${ContainerLine} transparent`,
      scrollbarWidth: "thin",

      "@supports": {
        "not selector(:has)": {
          ":focus": {
            vars: {
              [BorderWidth]: config.borderWidth.B600,
            },
            boxShadow: `inset 0 0 0 ${BorderWidth} ${ContainerLine}`,
          },
        },
      },
      selectors: {
        "&:focus": {
          outline: "none",
        },
        "&::placeholder": {
          color: "inherit",
          opacity: config.opacity.Placeholder,
        },
        "&:has(textarea:focus)": {
          vars: {
            [BorderWidth]: config.borderWidth.B600,
          },
          boxShadow: `inset 0 0 0 ${BorderWidth} ${ContainerLine}`,
        },

        "&::-webkit-scrollbar": {
          width: toRem(8),
          height: toRem(8),
        },
        "&::-webkit-scrollbar-thumb, &::-webkit-scrollbar-track": {
          border: `${toRem(2)} solid transparent`,
          backgroundClip: "padding-box",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: ContainerLine,
          borderRadius: config.radii.Pill,
          minHeight: toRem(20),
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "transparent",
          borderRadius: config.radii.Pill,
        },
        "&::-webkit-scrollbar-corner": {
          backgroundColor: "transparent",
        },
        "&::-webkit-resizer": {
          background: "transparent",
          borderBottom: `${BorderWidth} solid currentColor`,
          borderRight: `${BorderWidth} solid currentColor`,
          borderBottomRightRadius: "inherit",
        },
      },
    },
    Disabled,
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
        minHeight: toRem(32),
        padding: `calc((${toRem(32)} - ${LineHeight}) / 2) ${config.space.S200}`,
        paddingRight: 0,
      },
      "400": {
        vars: {
          [FontSize]: config.fontSize.T300,
          [LineHeight]: config.lineHeight.T300,
          [LetterSpacing]: config.letterSpacing.T300,
        },
        minHeight: toRem(40),
        padding: `calc((${toRem(40)} - ${LineHeight}) / 2) ${config.space.S300}`,
        paddingRight: 0,
      },
      "500": {
        vars: {
          [FontSize]: config.fontSize.T400,
          [LineHeight]: config.lineHeight.T400,
          [LetterSpacing]: config.letterSpacing.T400,
        },
        minHeight: toRem(48),
        padding: `calc((${toRem(48)} - ${LineHeight}) / 2) ${config.space.S400}`,
        paddingRight: config.space.S100,
      },
    },
    outlined: {
      true: {
        boxShadow: `inset 0 0 0 ${BorderWidth} ${ContainerLine}`,
      },
    },
    radii: RadiiVariant,
    resize: {
      Vertical: {
        resize: "vertical",
      },
      Horizontal: {
        resize: "horizontal",
      },
      Both: {
        resize: "both",
      },
      None: {
        resize: "none",
      },
      Block: {
        resize: "block",
      },
      Inline: {
        resize: "inline",
      },
    },
  },
  defaultVariants: {
    variant: "Background",
    size: "400",
    radii: "400",
    resize: "Vertical",
  },
});

export type TextAreaVariants = RecipeVariants<typeof TextArea>;
