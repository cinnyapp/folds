import { ComplexStyleRule } from "@vanilla-extract/css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { color } from "../../theme/color.css";
import { config } from "../../theme/config.css";
import { DefaultReset } from "../reset.css";
import { ContainerColor } from "../types";

const getVariant = (variant: ContainerColor): ComplexStyleRule => ({
  borderColor: color[variant].ContainerLine,
});

export const Line = recipe({
  base: [
    DefaultReset,
    {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
    },
  ],
  variants: {
    variant: {
      Inherit: {
        borderColor: "inherit",
      },
      Background: getVariant("Background"),
      Surface: getVariant("Surface"),
      SurfaceVariant: getVariant("SurfaceVariant"),
      Primary: getVariant("Primary"),
      Secondary: getVariant("Secondary"),
      Success: getVariant("Success"),
      Warning: getVariant("Warning"),
      Critical: getVariant("Critical"),
    },
    direction: {
      Horizontal: {
        borderBottomStyle: "solid",
        height: 0,
      },
      Vertical: {
        borderLeftStyle: "solid",
        width: 0,
        flexDirection: "column",
      },
    },
    size: {
      "300": {
        borderWidth: config.borderWidth.B300,
      },
      "400": {
        borderWidth: config.borderWidth.B400,
      },
      "500": {
        borderWidth: config.borderWidth.B500,
      },
      "600": {
        borderWidth: config.borderWidth.B600,
      },
      "700": {
        borderWidth: config.borderWidth.B700,
      },
    },
  },
  defaultVariants: {
    variant: "Surface",
    direction: "Horizontal",
    size: "400",
  },
});

export type LineVariants = RecipeVariants<typeof Line>;
