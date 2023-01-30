import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { config } from "../../theme/config.css";
import { DefaultReset } from "../reset.css";

export const Text = recipe({
  base: [
    DefaultReset,
    {
      color: "inherit",
    },
  ],
  variants: {
    size: {
      inherit: {},
      D400: {
        fontSize: config.fontSize.D400,
        lineHeight: config.lineHeight.D400,
        letterSpacing: config.letterSpacing.D400,
        fontWeight: config.fontWeight.W600,
      },
      H1: {
        fontSize: config.fontSize.H1,
        lineHeight: config.lineHeight.H1,
        letterSpacing: config.letterSpacing.H1,
        fontWeight: config.fontWeight.W600,
      },
      H2: {
        fontSize: config.fontSize.H2,
        lineHeight: config.lineHeight.H2,
        letterSpacing: config.letterSpacing.H2,
        fontWeight: config.fontWeight.W600,
      },
      H3: {
        fontSize: config.fontSize.H3,
        lineHeight: config.lineHeight.H3,
        letterSpacing: config.letterSpacing.H3,
        fontWeight: config.fontWeight.W600,
      },
      H4: {
        fontSize: config.fontSize.H4,
        lineHeight: config.lineHeight.H4,
        letterSpacing: config.letterSpacing.H4,
        fontWeight: config.fontWeight.W600,
      },
      H5: {
        fontSize: config.fontSize.H5,
        lineHeight: config.lineHeight.H5,
        letterSpacing: config.letterSpacing.H5,
        fontWeight: config.fontWeight.W600,
      },
      H6: {
        fontSize: config.fontSize.H6,
        lineHeight: config.lineHeight.H6,
        letterSpacing: config.letterSpacing.H6,
        fontWeight: config.fontWeight.W600,
      },
      T500: {
        fontSize: config.fontSize.T500,
        lineHeight: config.lineHeight.T500,
        letterSpacing: config.letterSpacing.T500,
        fontWeight: config.fontWeight.W400,
      },
      T400: {
        fontSize: config.fontSize.T400,
        lineHeight: config.lineHeight.T400,
        letterSpacing: config.letterSpacing.T400,
        fontWeight: config.fontWeight.W400,
      },
      T300: {
        fontSize: config.fontSize.T300,
        lineHeight: config.lineHeight.T300,
        letterSpacing: config.letterSpacing.T300,
        fontWeight: config.fontWeight.W400,
      },
      T200: {
        fontSize: config.fontSize.T200,
        lineHeight: config.lineHeight.T200,
        letterSpacing: config.letterSpacing.T200,
        fontWeight: config.fontWeight.W400,
      },
      B500: {
        fontSize: config.fontSize.B500,
        lineHeight: config.lineHeight.B500,
        letterSpacing: config.letterSpacing.B500,
        fontWeight: config.fontWeight.W500,
      },
      B400: {
        fontSize: config.fontSize.B400,
        lineHeight: config.lineHeight.B400,
        letterSpacing: config.letterSpacing.B400,
        fontWeight: config.fontWeight.W500,
      },
      B300: {
        fontSize: config.fontSize.B300,
        lineHeight: config.lineHeight.B300,
        letterSpacing: config.letterSpacing.B300,
        fontWeight: config.fontWeight.W500,
      },
      L400: {
        fontSize: config.fontSize.L400,
        lineHeight: config.lineHeight.L400,
        letterSpacing: config.letterSpacing.L400,
        fontWeight: config.fontWeight.W600,
      },
      O400: {
        fontSize: config.fontSize.O400,
        lineHeight: config.lineHeight.O400,
        letterSpacing: config.letterSpacing.O400,
        fontWeight: config.fontWeight.W600,
        textTransform: "uppercase",
      },
      C400: {
        fontSize: config.fontSize.C400,
        lineHeight: config.lineHeight.C400,
        letterSpacing: config.letterSpacing.C400,
        fontWeight: config.fontWeight.W400,
        fontStyle: "italic",
      },
    },
    align: {
      Left: {
        textAlign: "left",
      },
      Center: {
        textAlign: "center",
      },
      Right: {
        textAlign: "right",
      },
      Justify: {
        textAlign: "justify",
      },
    },
    truncate: {
      true: {
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
      },
    },
    priority: {
      Inherit: {},
      Initial: {
        opacity: 1,
      },
      500: {
        opacity: config.opacity.P500,
      },
      400: {
        opacity: config.opacity.P400,
      },
      300: {
        opacity: config.opacity.P300,
      },
    },
  },
  defaultVariants: {
    size: "T400",
    priority: "Inherit",
  },
});

export type TextVariants = RecipeVariants<typeof Text>;
