import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { DefaultReset } from "../reset.css";
import { CrossSizeVariant } from "../variant.css";

export const Icon = recipe({
  base: [
    DefaultReset,
    {
      flexShrink: "0",
      color: "currentColor",
    },
  ],
  variants: {
    size: CrossSizeVariant,
  },
  defaultVariants: {
    size: "400",
  },
});

export type IconVariants = RecipeVariants<typeof Icon>;
