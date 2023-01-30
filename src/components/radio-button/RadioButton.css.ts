import { ComplexStyleRule } from "@vanilla-extract/css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { color } from "../../theme/color.css";
import { config } from "../../theme/config.css";
import { DefaultReset } from "../reset.css";
import { Disabled, FocusOutline } from "../selectorPreset.css";
import { MainColor } from "../types";
import { CrossSizeVariant } from "../variant.css";

const getVariant = (variant: MainColor): ComplexStyleRule => ({
  ":checked": {
    color: color[variant].Main,
  },
});

export const RadioButton = recipe({
  base: [
    DefaultReset,
    {
      borderRadius: config.radii.Round,
      boxShadow: `inset 0 0 0 ${config.borderWidth.B400} CurrentColor`,
      cursor: "pointer",
      flexShrink: "0",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",

      selectors: {
        "&[type=radio]": {
          padding: "0",
          margin: "0",
          appearance: "none",
          WebkitTapHighlightColor: "transparent",
        },
        "&:checked::after": {
          content: "",
          position: "absolute",
          display: "inline-block",
          width: "60%",
          height: "60%",
          color: "CurrentColor",
          borderRadius: config.radii.Round,
          backgroundColor: "CurrentColor",
        },

        "&:not(:checked)": {
          opacity: config.opacity.P300,
        },
      },
    },
    FocusOutline,
    Disabled,
  ],

  variants: {
    variant: {
      Primary: getVariant("Primary"),
      Secondary: getVariant("Secondary"),
      Success: getVariant("Success"),
      Warning: getVariant("Warning"),
      Critical: getVariant("Critical"),
    },
    size: CrossSizeVariant,
  },
  defaultVariants: {
    variant: "Secondary",
    size: "400",
  },
});

export type RadioButtonVariants = RecipeVariants<typeof RadioButton>;
