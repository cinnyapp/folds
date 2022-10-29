import { CSS, styled, toRem } from "../../config";
import { MainColor } from "../types";

const getVariant = (variant: MainColor): CSS => ({
  $$BadgeVariant: `$colors$${variant}`,
  $$BadgeVariantLine: `$colors$${variant}Line`,
  $$BadgeOnVariant: `$colors$On${variant}`,

  $$BadgeVariantContainer: `$colors$${variant}Container`,
  $$BadgeVariantContainerLine: `$colors$${variant}ContainerLine`,
  $$BadgeOnVariantContainer: `$colors$On${variant}Container`,
});

export const Badge = styled("span", {
  border: "none",
  appearance: "none",
  WebkitTapHighlightColor: "transparent",
  boxShadow: "none",

  margin: 0,
  padding: "0 $100",
  height: toRem(16),
  display: "inline-flex",
  alignItems: "center",
  borderRadius: "$300",

  variants: {
    variant: {
      Primary: getVariant("Primary"),
      Secondary: getVariant("Secondary"),
      Success: getVariant("Success"),
      Warning: getVariant("Warning"),
      Critical: getVariant("Critical"),
    },
    fill: {
      Solid: {
        backgroundColor: "$$BadgeVariant",
        color: "$$BadgeOnVariant",
        $$BadgeBorderColor: "$$BadgeVariantLine",
      },
      Soft: {
        backgroundColor: "$$BadgeVariantContainer",
        color: "$$BadgeOnVariantContainer",
        $$BadgeBorderColor: "$$BadgeVariantContainerLine",
      },
    },
    outlined: {
      true: {
        boxShadow: "inset 0 0 0 $borderWidths$300 $$BadgeBorderColor",
      },
    },
  },

  defaultVariants: {
    variant: "Primary",
    fill: "Soft",
  },
});
