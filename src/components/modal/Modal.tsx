import { CSS, keyframes, styled } from "../../config";
import { ContainerColor } from "../types";

const getVariant = (variant: ContainerColor): CSS => ({
  backgroundColor: `$${variant}Container`,
  color: `$On${variant}Container`,
  border: `$borderWidths$300 solid $colors$${variant}ContainerLine`,
});

const ModalOpenAnime = keyframes({
  "0%": {
    transform: "translateY(5px)",
  },
  "100%": {
    transform: "translateY(0)",
  },
});

export const Modal = styled("div", {
  borderRadius: "$400",
  boxShadow: "$E300",
  width: "100%",
  height: "100%",
  overflow: "hidden",
  animation: `${ModalOpenAnime} 200ms`,

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
      300: {
        maxWidth: "$ModalWidth300",
        maxHeight: "$ModalHeight300",
      },
      400: {
        maxWidth: "$ModalWidth400",
        maxHeight: "$ModalHeight400",
      },
      500: {
        maxWidth: "$ModalWidth500",
        maxHeight: "$ModalHeight500",
      },
    },
    flexHeight: {
      true: {
        height: "unset",
      },
    },
  },
  defaultVariants: {
    variant: "Surface",
    size: 400,
  },
});
