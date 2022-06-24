import { createStitches } from "@stitches/react";

export const { styled, css, globalCss, theme, createTheme, keyframes, getCssText } = createStitches(
  {
    theme: {
      colors: {
        purple: "purple",
        blue: "blue",
        primary: "$blue",
        primaryHover: "#0000e7",
        surface: "white",
      },
    },
  }
);
