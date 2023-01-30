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

export const Chip = recipe({
  base: [
    DefaultReset,
    {
      display: "inline-flex",
      alignItems: "center",
      color: OnContainer,
      backgroundColor: Container,
      cursor: "pointer",

      selectors: {
        "&[aria-selected=true], &[aria-pressed=true]": {
          backgroundColor: ContainerActive,
        },
        "&:hover, &:focus-visible": {
          backgroundColor: ContainerHover,
        },
        "&:active": {
          backgroundColor: ContainerActive,
        },
        "&[data-ui-before=true]": {
          paddingLeft: [UIBeforeAfterSpace],
        },
        "&[data-ui-after=true]": {
          paddingRight: [UIBeforeAfterSpace],
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
    size: {
      "400": {
        vars: {
          [UIBeforeAfterSpace]: config.space.S200,
        },
        height: toRem(24),
        padding: `0 ${config.space.S300}`,
        gap: config.space.S100,
      },
      "500": {
        vars: {
          [UIBeforeAfterSpace]: config.space.S300,
        },
        height: toRem(32),
        padding: `0 ${config.space.S400}`,
        gap: config.space.S200,
      },
    },
    outlined: {
      true: {
        border: `${config.borderWidth.B400} solid ${ContainerLine}`,
      },
    },
    radii: RadiiVariant,
  },
  defaultVariants: {
    variant: "Surface",
    size: "400",
    radii: "400",
  },
});

export type ChipVariants = RecipeVariants<typeof Chip>;
