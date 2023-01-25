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
const MainHover = createVar();
const MainActive = createVar();
const MainLine = createVar();
const OnMain = createVar();
const Container = createVar();
const ContainerHover = createVar();
const ContainerActive = createVar();
const ContainerLine = createVar();
const OnContainer = createVar();

const Hover = createVar();
const Active = createVar();
const UIBeforeAfterSpace = createVar();

const getVariant = (variant: MainColor): ComplexStyleRule => ({
  vars: {
    [Main]: color[variant].Main,
    [MainHover]: color[variant].MainHover,
    [MainActive]: color[variant].MainActive,
    [MainLine]: color[variant].MainLine,
    [OnMain]: color[variant].OnMain,
    [Container]: color[variant].Container,
    [ContainerHover]: color[variant].ContainerHover,
    [ContainerActive]: color[variant].ContainerActive,
    [ContainerLine]: color[variant].ContainerLine,
    [OnContainer]: color[variant].OnContainer,
  },
});

export const Button = recipe({
  base: [
    DefaultReset,
    {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",

      selectors: {
        "&[aria-pressed=true]": {
          backgroundColor: Active,
        },
        "&:hover, &:focus-visible": {
          backgroundColor: Hover,
        },
        "&:active": {
          backgroundColor: Active,
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
      "500": {
        vars: {
          [UIBeforeAfterSpace]: config.space.S400,
        },
        height: toRem(48),
        gap: config.space.S300,
        padding: `0 ${config.space.S500}`,
      },
    },
    variant: {
      Primary: getVariant("Primary"),
      Secondary: getVariant("Secondary"),
      Success: getVariant("Success"),
      Warning: getVariant("Warning"),
      Critical: getVariant("Critical"),
    },
    fill: {
      Solid: {
        vars: {
          [Hover]: MainHover,
          [Active]: MainActive,
        },
        backgroundColor: Main,
        color: OnMain,
        borderColor: MainLine,
      },
      Soft: {
        vars: {
          [Hover]: ContainerHover,
          [Active]: ContainerActive,
        },
        backgroundColor: Container,
        color: OnContainer,
        borderColor: ContainerLine,
      },
      None: {
        vars: {
          [Hover]: ContainerHover,
          [Active]: ContainerActive,
        },
        backgroundColor: "inherit",
        color: Main,
        borderColor: Main,
      },
    },
    outlined: {
      true: {
        borderWidth: config.borderWidth.B400,
      },
    },
    radii: RadiiVariant,
  },
  defaultVariants: {
    size: "400",
    variant: "Primary",
    fill: "Solid",
    radii: "400",
  },
});

export type ButtonVariants = RecipeVariants<typeof Button>;
