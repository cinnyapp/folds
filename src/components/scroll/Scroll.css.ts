import { ComplexStyleRule, createVar } from "@vanilla-extract/css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { color } from "../../theme/color.css";
import { config } from "../../theme/config.css";
import { toRem } from "../../theme/util";
import { DefaultReset } from "../reset.css";
import { ContainerColor } from "../types";

const ScrollTrackColor = createVar();
const ScrollThumbColor = createVar();

const getVariant = (variant: ContainerColor): ComplexStyleRule => ({
  vars: {
    [ScrollTrackColor]: color[variant].ContainerHover,
    [ScrollThumbColor]: color[variant].ContainerLine,
  },
});

export const Scroll = recipe({
  base: [
    DefaultReset,
    {
      width: "100%",
      height: "100%",
      overflow: "hidden",
      scrollbarColor: "transparent transparent",

      selectors: {
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "transparent",
          borderRadius: config.radii.Pill,
          minHeight: toRem(35),
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "transparent",
          borderRadius: config.radii.Pill,
        },
      },
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
    visibility: {
      Always: {
        scrollbarColor: `${ScrollThumbColor} ${ScrollTrackColor}`,
        selectors: {
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: ScrollThumbColor,
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: ScrollTrackColor,
          },
        },
      },
      Hover: {
        selectors: {
          "&:hover": {
            scrollbarColor: `${ScrollThumbColor} ${ScrollTrackColor}`,
          },
          "&:hover::-webkit-scrollbar-thumb": {
            backgroundColor: ScrollThumbColor,
          },
          "&:hover::-webkit-scrollbar-track": {
            backgroundColor: ScrollTrackColor,
          },
        },
      },
    },
    hideTrack: {
      true: {
        vars: {
          [ScrollTrackColor]: "transparent",
        },
      },
    },
    size: {
      "0": {
        scrollbarWidth: "none",
        selectors: {
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      },
      "300": {
        scrollbarWidth: "thin",
        selectors: {
          "&::-webkit-scrollbar": {
            width: toRem(8),
            height: toRem(8),
          },
          "&::-webkit-scrollbar-thumb, &::-webkit-scrollbar-track": {
            border: `${toRem(2)} solid transparent`,
            backgroundClip: "padding-box",
          },
        },
      },
      "400": {
        scrollbarWidth: "auto",
        selectors: {
          "&::-webkit-scrollbar": {
            width: toRem(16),
            height: toRem(16),
          },
          "&::-webkit-scrollbar-thumb, &::-webkit-scrollbar-track": {
            border: `${toRem(4)} solid transparent`,
            backgroundClip: "padding-box",
          },
        },
      },
    },
    direction: {
      Horizontal: {
        overflowX: "scroll",
      },
      Vertical: {
        overflowY: "scroll",
      },
      Both: {
        overflow: "scroll",
      },
    },
  },
  compoundVariants: [
    {
      variants: {
        direction: "Horizontal",
        size: "300",
      },
      style: {
        selectors: {
          "&[data-x-scrollbar-width='0']": {
            paddingBottom: toRem(8),
          },
        },
      },
    },
    {
      variants: {
        direction: "Horizontal",
        size: "400",
      },
      style: {
        selectors: {
          "&[data-x-scrollbar-width='0']": {
            paddingBottom: toRem(16),
          },
        },
      },
    },
    {
      variants: {
        direction: "Vertical",
        size: "300",
      },
      style: {
        selectors: {
          "&[data-y-scrollbar-width='0']": {
            paddingRight: toRem(8),
          },
        },
      },
    },
    {
      variants: {
        direction: "Vertical",
        size: "400",
      },
      style: {
        selectors: {
          "&[data-y-scrollbar-width='0']": {
            paddingRight: toRem(16),
          },
        },
      },
    },
    {
      variants: {
        direction: "Both",
        size: "300",
      },
      style: {
        selectors: {
          "&[data-x-scrollbar-width='0']": {
            paddingBottom: toRem(8),
          },
          "&[data-y-scrollbar-width='0']": {
            paddingRight: toRem(8),
          },
        },
      },
    },
    {
      variants: {
        direction: "Both",
        size: "400",
      },
      style: {
        selectors: {
          "&[data-x-scrollbar-width='0']": {
            paddingBottom: toRem(16),
          },
          "&[data-y-scrollbar-width='0']": {
            paddingRight: toRem(16),
          },
        },
      },
    },
  ],
  defaultVariants: {
    variant: "Surface",
    visibility: "Always",
    size: "400",
    direction: "Vertical",
  },
});

export type ScrollVariants = RecipeVariants<typeof Scroll>;
