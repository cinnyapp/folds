import { createStitches } from "@stitches/react";

export const { styled, css, globalCss, theme, createTheme, keyframes, getCssText } = createStitches(
  {
    theme: {
      fonts: {
        Inter: "Arial, sans-serif",
      },
      fontSizes: {
        D400: "45px",

        H1: "35px",
        H2: "25px",
        H3: "20px",
        H4: "18px",
        H5: "16px",
        H6: "14px",

        T400: "15px",
        T300: "14px",
        T200: "12px",

        B500: "16px",
        B400: "14px",
        B300: "12px",

        L400: "12px",
        O400: "12px",
        C400: "12px",
      },
      lineHeights: {
        D400: "52px",

        H1: "40px",
        H2: "30px",
        H3: "26px",
        H4: "24px",
        H5: "22px",
        H6: "18px",

        T400: "22px",
        T300: "20px",
        T200: "18px",

        B500: "20px",
        B400: "18px",
        B300: "16px",

        L400: "16px",
        O400: "16px",
        C400: "16px",
      },
      letterSpacings: {
        D400: "0",

        H1: "0",
        H2: "0",
        H3: "0",
        H4: "0",
        H5: "0",
        H6: "0",

        T400: "0",
        T300: "0",
        T200: "0",

        B500: "0",
        B400: "0",
        B300: "0",

        L400: "0",
        O400: "0",
        C400: "0",
      },
      fontWeights: {
        100: "100",
        200: "200",
        300: "300",
        400: "400",
        500: "500",
        600: "600",
        700: "700",
        800: "800",
        900: "900",
      },
      space: {
        0: "0",
        100: "4px",
        200: "8px",
        300: "12px",
        400: "16px",
        500: "20px",
        600: "24px",
        700: "32px",
      },
      radii: {
        0: "0",
        300: "4px",
        400: "8px",
        500: "12px",
        Round: "50%",
        Pill: "9999px",
      },
      borderWidths: {
        0: "0",
        300: "1px",
        400: "1.5px",
        500: "2px",
        600: "3px",
        700: "4px",
      },
      zIndices: {
        100: "100",
        200: "200",
        300: "300",
        400: "400",
        max: "999",
      },
      shadows: {
        100: "0px 1px 2px rgba(0, 0, 0, 0.2)",
        200: "0px 1px 6px rgba(0, 0, 0, 0.2)",
        300: "0px 2px 8px rgba(0, 0, 0, 0.2)",
        400: "0px 4px 16px rgba(0, 0, 0, 0.2)",
      },
      sizes: {
        X50: "16px",
        X100: "18px",
        X200: "20px",
        X300: "22px",
        X400: "24px",
        X500: "28px",
        X600: "32px",
      },
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
