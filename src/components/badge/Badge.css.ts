import { ComplexStyleRule, createVar } from "@vanilla-extract/css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { color } from "../../theme/color.css";
import { config } from "../../theme/config.css";
import { toRem } from "../../theme/util";
import { DefaultReset } from "../reset.css";
import { Disabled, FocusOutline } from "../selectorPreset.css";
import { MainColor } from "../types";
import { RadiiVariant } from "../variant.css";

const Main = createVar();
const MainLine = createVar();
const OnMain = createVar();
const Container = createVar();
const ContainerLine = createVar();
const OnContainer = createVar();

const getVariant = (variant: MainColor): ComplexStyleRule => ({
  vars: {
    [Main]: color[variant].Main,
    [MainLine]: color[variant].MainLine,
    [OnMain]: color[variant].OnMain,
    [Container]: color[variant].Container,
    [ContainerLine]: color[variant].ContainerLine,
    [OnContainer]: color[variant].OnContainer,
  },
});

export const Badge = recipe({
  base: [
    DefaultReset,
    {
      padding: `0 ${config.space.S100}`,
      height: toRem(16),
      minWidth: toRem(16),
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    },
    FocusOutline,
    Disabled,
  ],
  variants: {
    variant: {
      Primary: getVariant("Primary"),
      Secondary: getVariant("Secondary"),
      Success: getVariant("Success"),
      Warning: getVariant("Warning"),
      Critical: getVariant("Critical"),
    },
    fill: {
      Solid: {
        backgroundColor: Main,
        color: OnMain,
        borderColor: MainLine,
      },
      Soft: {
        backgroundColor: Container,
        color: OnContainer,
        borderColor: ContainerLine,
      },
    },
    outlined: {
      true: {
        borderWidth: config.borderWidth.B300,
      },
    },
    radii: RadiiVariant,
  },
  defaultVariants: {
    variant: "Primary",
    fill: "Soft",
    radii: "300",
  },
});

export type BadgeVariants = RecipeVariants<typeof Badge>;
