import { ComplexStyleRule } from "@vanilla-extract/css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { color } from "../../theme/color.css";
import { toRem } from "../../theme/util";
import { DefaultReset } from "../reset.css";
import { ContainerColor } from "../types";

const getVariant = (variant: ContainerColor): ComplexStyleRule => ({
  backgroundColor: color[variant].Container,
  color: color[variant].OnContainer,
  border: `0 solid ${color[variant].ContainerLine}`,
});

export const Header = recipe({
  base: [
    DefaultReset,
    {
      display: "flex",
      alignItems: "center",
      flexShrink: 0,
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
      "300": { height: toRem(32) },
      "400": { height: toRem(40) },
      "500": { height: toRem(48) },
      "600": { height: toRem(54) },
      "700": { height: toRem(64) },
    },
  },
  defaultVariants: {
    variant: "Surface",
    size: "400",
  },
});

export type HeaderVariants = RecipeVariants<typeof Header>;
