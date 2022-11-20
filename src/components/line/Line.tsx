import { CSS, styled } from "../../config";
import { ContainerColor } from "../types";

const getVariant = (variant: ContainerColor): CSS => ({
  borderColor: `$${variant}ContainerLine`,
});

export const Line = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",

  variants: {
    variant: {
      inherit: {
        borderColor: "inherit",
      },
      Background: getVariant("Background"),
      Surface: getVariant("Surface"),
      SurfaceVariant: getVariant("SurfaceVariant"),
      Primary: getVariant("Primary"),
      Secondary: getVariant("Secondary"),
      Success: getVariant("Success"),
      Warning: getVariant("Warning"),
      Critical: getVariant("Critical"),
    },
    direction: {
      Horizontal: {
        borderBottomStyle: "solid",
        height: 0,
        width: "100%",
      },
      Vertical: {
        borderLeftStyle: "solid",
        width: 0,
        height: "100%",
      },
    },
    size: {
      300: {
        borderWidth: "$300",
      },
      400: {
        borderWidth: "$400",
      },
      500: {
        borderWidth: "$500",
      },
      600: {
        borderWidth: "$600",
      },
      700: {
        borderWidth: "$700",
      },
    },
  },
  defaultVariants: {
    variant: "Surface",
    direction: "Horizontal",
    size: 400,
  },
});
