import { CSS, keyframes, styled } from "../../config";
import { ContainerColor } from "../types";

const getVariant = (variant: ContainerColor): CSS => ({
  backgroundColor: `$${variant}Container`,
  color: `$On${variant}Container`,
  borderColor: `$On${variant}ContainerLine`,
});

const DialogOpenAnime = keyframes({
  "0%": {
    transform: "translateY(5px)",
  },
  "100%": {
    transform: "translateY(0)",
  },
});

export const Dialog = styled("div", {
  borderRadius: "$400",
  boxShadow: "$E400",
  width: "100%",
  maxWidth: "$DialogWidth",
  overflow: "hidden",
  animation: `${DialogOpenAnime} 200ms`,

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
