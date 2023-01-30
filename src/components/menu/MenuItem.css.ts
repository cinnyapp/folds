import { ComplexStyleRule, createVar } from "@vanilla-extract/css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { color } from "../../theme/color.css";
import { config } from "../../theme/config.css";
import { toRem } from "../../theme/util";
import { DefaultReset } from "../reset.css";
import { Disabled, FocusOutline } from "../selectorPreset.css";
import { ContainerColor } from "../types";
import { RadiiVariant } from "../variant.css";

const Container = createVar();
const ContainerHover = createVar();
const ContainerActive = createVar();
const ContainerLine = createVar();
const OnContainer = createVar();

const getVariant = (variant: ContainerColor): ComplexStyleRule => ({
  vars: {
    [Container]: color[variant].Container,
    [ContainerHover]: color[variant].ContainerHover,
    [ContainerActive]: color[variant].ContainerActive,
    [ContainerLine]: color[variant].ContainerLine,
    [OnContainer]: color[variant].OnContainer,
  },
});

export const MenuItem = recipe({
  base: [
    DefaultReset,
    {
      width: "100%",
      height: toRem(40),
      padding: `0 ${config.space.S400}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "start",
      gap: config.space.S200,
      cursor: "pointer",
      backgroundColor: Container,
      color: OnContainer,

      selectors: {
        "&[aria-pressed=true]": {
          backgroundColor: ContainerActive,
        },
        "&:hover, &:focus-visible": {
          backgroundColor: ContainerHover,
        },
        "&:active": {
          backgroundColor: ContainerActive,
        },
        "&[data-ui-before=true]": {
          paddingLeft: config.space.S300,
        },
        "&[data-ui-after=true]": {
          paddingRight: config.space.S300,
        },
      },
    },
    FocusOutline,
    Disabled,
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
    radii: RadiiVariant,
  },
  defaultVariants: {
    variant: "Surface",
    radii: "0",
  },
});

export type MenuItemVariants = RecipeVariants<typeof MenuItem>;
