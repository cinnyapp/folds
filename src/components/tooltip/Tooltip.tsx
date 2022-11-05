import { CSS, styled, toRem } from "../../config";
import { ContainerColor } from "../types";

const getVariant = (variant: ContainerColor): CSS => ({
  backgroundColor: `$${variant}Container`,
  color: `$On${variant}Container`,
});

export const Tooltip = styled("div", {
  margin: 0,
  padding: `0 $300`,
  height: toRem(32),
  boxShadow: "$E200",
  borderRadius: "$400",
  display: "inline-flex",
  alignItems: "center",

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
