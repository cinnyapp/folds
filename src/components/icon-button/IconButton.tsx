import { styled } from "../../config";
import { ContainerColor } from "../types";

const getVariant = (variant: ContainerColor) => ({
  backgroundColor: `$${variant}Container`,
  color: `$On${variant}Container`,
  "@hover": {
    "&:hover": {
      backgroundColor: `$${variant}ContainerHover`,
    },
  },
  "&:focus-visible": {
    backgroundColor: `$${variant}ContainerHover`,
    outline: "$FocusRing",
  },
  "&:active": {
    backgroundColor: `$${variant}ContainerActive`,
  },
  "&[aria-pressed=true]": {
    backgroundColor: `$${variant}ContainerActive`,
  },
});

export const IconButton = styled("button", {
  padding: 0,
  margin: 0,
  width: "auto",
  display: "inline-block",
  background: "transparent",
  border: "none",
  boxShadow: "none",
  lineHeight: 0,
  color: "CurrentColor",
  appearance: "none",
  borderRadius: "$400",
  cursor: "pointer",
  textDecoration: "none",
  WebkitTapHighlightColor: "transparent",

  "&[disabled], &[aria-disabled=true]": {
    opacity: "$Disabled",
    cursor: "not-allowed",
  },

  variants: {
    size: {
      600: {
        padding: "16px",
      },
      500: {
        padding: "12px",
      },
      400: {
        padding: "8px",
      },
      300: {
        padding: "4px",
      },
    },
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
    size: 400,
    variant: "Surface",
  },
});
