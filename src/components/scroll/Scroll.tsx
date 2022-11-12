import { styled } from "@stitches/react";
import { ContainerColor } from "../types";
import { CSS, toRem } from "../../config";

const getVariant = (variant: ContainerColor): CSS => ({
  $$ScrollTrackColor: `$colors$${variant}ContainerHover`,
  $$ScrollThumbColor: `$colors$${variant}ContainerLine`,
});

export const Scroll = styled("div", {
  padding: "0",
  margin: "0",
  width: "100%",
  height: "100%",
  overflow: "hidden",

  scrollbarColor: "transparent transparent",
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "transparent",
    borderRadius: "$Pill",
    minHeight: toRem(35),
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "transparent",
    borderRadius: "$Pill",
  },

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
        scrollbarColor: "$$ScrollThumbColor $$ScrollTrackColor",
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "$$ScrollThumbColor",
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "$$ScrollTrackColor",
        },
      },
      Hover: {
        "&:hover": {
          scrollbarColor: "$$ScrollThumbColor $$ScrollTrackColor",
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "$$ScrollThumbColor",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "$$ScrollTrackColor",
          },
        },
      },
    },
    hideTrack: {
      true: {
        $$ScrollTrackColor: "transparent",
      },
    },
    size: {
      0: {
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      },
      300: {
        scrollbarWidth: "thin",
        "&::-webkit-scrollbar": {
          width: toRem(8),
          height: toRem(8),
        },
        "&::-webkit-scrollbar-thumb, &::-webkit-scrollbar-track": {
          border: `${toRem(2)} solid transparent`,
          backgroundClip: "padding-box",
        },
      },
      400: {
        scrollbarWidth: "auto",
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
  defaultVariants: {
    variant: "Surface",
    visibility: "Always",
    size: 400,
    direction: "Vertical",
  },
});
