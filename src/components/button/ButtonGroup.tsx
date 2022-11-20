import { CSS, styled } from "../../config";
import { MainColor } from "../types";
import { Button } from "./Button";

const getVariant = (variant: MainColor): CSS => ({
  $$ButtonGroupVariant: `$colors$${variant}`,
  $$ButtonGroupVariantContainer: `$colors$${variant}Container`,
  $$ButtonGroupVariantLine: `$colors$${variant}Line`,
  $$ButtonGroupVariantContainerLine: `$colors$${variant}ContainerLine`,
});

export const ButtonGroup = styled("div", {
  display: "inline-flex",
  borderRadius: "$400",

  [`& > ${Button}`]: {
    "&:not(:first-child):not(:last-child)": {
      borderRadius: 0,
      borderLeftWidth: 0,
      borderRightWidth: 0,
    },
    "&:first-child": {
      borderRightWidth: 0,
      borderRadius: "$400 0 0 $400",
    },
    "&:last-child": {
      borderLeftWidth: 0,
      borderRadius: "0 $400 $400 0",
    },
  },

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
        borderColor: "$$ButtonGroupVariantLine",
      },
      Soft: {
        borderColor: "$$ButtonGroupVariantContainerLine",
      },
      None: {
        borderColor: "$$ButtonGroupVariant",
      },
    },
  },
  defaultVariants: {
    variant: "Primary",
    fill: "Solid",
  },
});
