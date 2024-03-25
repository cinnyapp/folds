import { ComplexStyleRule, keyframes } from "@vanilla-extract/css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { color } from "../../theme/color.css";
import { config } from "../../theme/config.css";
import { DefaultReset } from "../reset.css";
import { ContainerColor } from "../types";

const getVariant = (variant: ContainerColor): ComplexStyleRule => ({
  backgroundColor: color[variant].Container,
  color: color[variant].OnContainer,
  border: `${config.borderWidth.B300} solid ${color[variant].ContainerLine}`,
});

const ModalOpenAnime = keyframes({
  "0%": {
    transform: "translateY(5px)",
  },
  "100%": {
    transform: "translateY(0)",
  },
});

export const Modal = recipe({
  base: [
    DefaultReset,
    {
      borderRadius: config.radii.R400,
      boxShadow: config.shadow.E300,
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      animation: `${ModalOpenAnime} 200ms`,
    },
  ],
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
      "300": {
        maxWidth: config.size.ModalWidth300,
        maxHeight: config.size.ModalHeight300,
      },
      "400": {
        maxWidth: config.size.ModalWidth400,
        maxHeight: config.size.ModalHeight400,
      },
      "500": {
        maxWidth: config.size.ModalWidth500,
        maxHeight: config.size.ModalHeight500,
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
    size: "400",
  },
});

export type ModalVariants = RecipeVariants<typeof Modal>;
