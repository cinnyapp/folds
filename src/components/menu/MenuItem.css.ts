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
const UIBeforeAfterSpace = createVar();

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
      display: "flex",
      alignItems: "center",
      justifyContent: "start",
      cursor: "pointer",
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
          paddingLeft: UIBeforeAfterSpace,
        },
        "&[data-ui-after=true]": {
          paddingRight: UIBeforeAfterSpace,
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
    fill: {
      Soft: {
        backgroundColor: Container,
      },
      None: {
        backgroundColor: "transparent",
      },
    },
    size: {
      "300": {
        vars: {
          [UIBeforeAfterSpace]: config.space.S200,
        },
        height: toRem(32),
        gap: config.space.S100,
        padding: `0 ${config.space.S300}`,
      },
      "400": {
        vars: {
          [UIBeforeAfterSpace]: config.space.S300,
        },
        height: toRem(40),
        gap: config.space.S200,
        padding: `0 ${config.space.S400}`,
      },
    },
    radii: RadiiVariant,
  },
  defaultVariants: {
    variant: "Surface",
    fill: "Soft",
    size: "400",
    radii: "0",
  },
});

export type MenuItemVariants = RecipeVariants<typeof MenuItem>;
