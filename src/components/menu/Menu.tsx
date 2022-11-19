import { CSS, styled } from "../../config";
import { ContainerColor } from "../types";

const getVariant = (variant: ContainerColor): CSS => ({
  backgroundColor: `$${variant}Container`,
  color: `$On${variant}Container`,
});

export const Menu = styled("div", {
  borderRadius: "$400",
  boxShadow: "$E200",
  zIndex: "$200",
  overflow: "hidden",

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
