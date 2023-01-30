import { ComplexStyleRule } from "@vanilla-extract/css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { color } from "../../theme/color.css";
import { config } from "../../theme/config.css";
import { DefaultReset } from "../reset.css";
import { ContainerColor } from "../types";

const getVariant = (variant: ContainerColor): ComplexStyleRule => ({
  backgroundColor: color[variant].Container,
  color: color[variant].OnContainer,
});

export const Menu = recipe({
  base: [
    DefaultReset,
    {
      borderRadius: config.radii.R400,
      boxShadow: config.shadow.E200,
      overflow: "hidden",
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
  },
  defaultVariants: {
    variant: "Surface",
  },
});

export type MenuVariants = RecipeVariants<typeof Menu>;
