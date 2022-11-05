import { CSS, styled, toRem } from "../../config";
import { ContainerColor } from "../types";

const getVariant = (variant: ContainerColor): CSS => ({
  backgroundColor: `$${variant}Container`,
  color: `$On${variant}Container`,
  border: `0 solid $${variant}ContainerLine`,
});

export const Header = styled("header", {
  padding: 0,
  margin: 0,
  border: "none",
  display: "flex",
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
    size: {
      300: { height: toRem(32) },
      400: { height: toRem(40) },
      500: { height: toRem(48) },
      600: { height: toRem(54) },
      700: { height: toRem(64) },
    },
  },
  defaultVariants: {
    variant: "Surface",
    size: 400,
  },
});
