import React, { ElementType } from "react";
import { styled } from "@stitches/react";
import { AsComponentProps, ContainerColor } from "../types";
import { CSS } from "../../config";

const getVariant = (variant: ContainerColor): CSS => ({
  $$ScrollTrackColor: `$colors$${variant}ContainerHover`,
  $$ScrollThumbColor: `$colors$${variant}ContainerLine`,
});

const StyledScroll = styled("div", {
  padding: "0",
  margin: "0",
  width: "100%",
  height: "100%",
  overflow: "hidden",

  scrollbarColor: "transparent transparent",
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "transparent",
    borderRadius: "$Pill",
    minHeight: 30,
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
          width: 8,
          height: 8,
        },
      },
      400: {
        scrollbarWidth: "auto",
        "&::-webkit-scrollbar": {
          width: 16,
          height: 16,
        },
        "&::-webkit-scrollbar-thumb, &::-webkit-scrollbar-track": {
          border: "4px solid transparent",
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

const defaultElement = "div";
type ScrollProps<E extends ElementType = typeof defaultElement> = AsComponentProps<E> & {
  css?: CSS;
};

export const Scroll = <E extends ElementType = typeof defaultElement>({
  children,
  ...props
}: ScrollProps<E>) => {
  const a = "";
  console.log(a);
  return <StyledScroll {...props}>{children}</StyledScroll>;
};
