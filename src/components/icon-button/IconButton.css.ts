import { ComplexStyleRule, createVar } from "@vanilla-extract/css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { color } from "../../theme/color.css";
import { config } from "../../theme/config.css";
import { toRem } from "../../theme/util";
import { DefaultReset } from "../reset.css";
import { Disabled, FocusOutline } from "../selectorPreset.css";
import { ContainerColor } from "../types";
import { RadiiVariant } from "../variant.css";

const Container = createVar();
const ContainerHover = createVar();
const ContainerActive = createVar();
const ContainerLine = createVar();
const OnContainer = createVar();

const getVariant = (variant: ContainerColor): ComplexStyleRule => ({
  vars: {
    [Container]: color[variant].Container,
    [ContainerHover]: color[variant].ContainerHover,
    [ContainerActive]: color[variant].ContainerActive,
    [ContainerLine]: color[variant].ContainerLine,
    [OnContainer]: color[variant].OnContainer,
  },
});

export const IconButton = recipe({
  base: [
    DefaultReset,
    {
      width: "auto",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      lineHeight: 1,
      cursor: "pointer",
      textDecoration: "none",

      color: OnContainer,

      selectors: {
        "&[aria-pressed=true]": {
          backgroundColor: ContainerActive,
        },
        "&:hover, &:focus-visible": {
          backgroundColor: ContainerHover,
        },
        "&:active": {
          backgroundColor: ContainerActive,
        },
      },
    },
    FocusOutline,
    Disabled,
  ],
  variants: {
    size: {
      "600": {
        padding: toRem(16),
      },
      "500": {
        padding: toRem(12),
      },
      "400": {
        padding: toRem(8),
      },
      "300": {
        padding: toRem(4),
      },
    },
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
    fill: {
      Soft: {
        backgroundColor: Container,
      },
      None: {
        backgroundColor: "transparent",
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
    size: "400",
    variant: "Surface",
    fill: "Soft",
    radii: "400",
  },
});

export type IconButtonVariants = RecipeVariants<typeof IconButton>;
