import * as Stitches from "@stitches/react";
import "@fontsource/inter/variable.css";

export type { VariantProps } from "@stitches/react";

export const pxToRem = (px: number) => parseFloat((px / 16).toFixed(4));
export const toRem = (px: number) => `${pxToRem(px)}rem`;

export const {
  prefix,
  styled,
  css,
  globalCss,
  theme,
  createTheme,
  keyframes,
  getCssText,
  config,
  reset,
} = Stitches.createStitches({
  theme: {
    fonts: {
      Inter: "InterVariable, 'Inter', -apple-system, 'Segoe UI', 'Helvetica', 'Arial', sans-serif",
    },
    fontSizes: {
      D400: toRem(45),

      H1: toRem(35),
      H2: toRem(25),
      H3: toRem(20),
      H4: toRem(18),
      H5: toRem(16),
      H6: toRem(14),

      T500: toRem(17),
      T400: toRem(15),
      T300: toRem(14),
      T200: toRem(12),

      B500: toRem(16),
      B400: toRem(14),
      B300: toRem(12),

      L400: toRem(12),
      O400: toRem(12),
      C400: toRem(12),
    },
    lineHeights: {
      D400: toRem(52),

      H1: toRem(40),
      H2: toRem(30),
      H3: toRem(26),
      H4: toRem(24),
      H5: toRem(22),
      H6: toRem(18),

      T500: toRem(24),
      T400: toRem(22),
      T300: toRem(20),
      T200: toRem(18),

      B500: toRem(20),
      B400: toRem(18),
      B300: toRem(16),

      L400: toRem(16),
      O400: toRem(16),
      C400: toRem(16),
    },
    letterSpacings: {
      D400: "0",

      H1: "0",
      H2: "0",
      H3: "0",
      H4: "0",
      H5: "0",
      H6: "0",

      T500: "0",
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
      100: toRem(4),
      200: toRem(8),
      300: toRem(12),
      400: toRem(16),
      500: toRem(20),
      600: toRem(24),
      700: toRem(32),
    },
    radii: {
      0: "0",
      300: toRem(4),
      400: toRem(8),
      500: toRem(12),
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
      Max: "999",
    },
    shadows: {
      E100: "0px 1px 2px rgba(0, 0, 0, 0.2)",
      E200: "0px 1px 6px rgba(0, 0, 0, 0.2)",
      E300: "0px 2px 8px rgba(0, 0, 0, 0.2)",
      E400: "0px 4px 16px rgba(0, 0, 0, 0.2)",
    },
    sizes: {
      X50: toRem(16),
      X100: toRem(18),
      X200: toRem(20),
      X300: toRem(22),
      X400: toRem(24),
      X500: toRem(28),
      X600: toRem(32),
    },
    transitions: {},
    colors: {
      BackgroundContainer: "#F2F2F2",
      BackgroundContainerHover: "#E5E5E5",
      BackgroundContainerActive: "#D9D9D9",
      BackgroundContainerLine: "#CCCCCC",
      OnBackgroundContainer: "#000000",

      SurfaceContainer: "#FFFFFF",
      SurfaceContainerHover: "#F2F2F2",
      SurfaceContainerActive: "#E5E5E5",
      SurfaceContainerLine: "#D9D9D9",
      OnSurfaceContainer: "#000000",

      SurfaceVariantContainer: "#F2F2F2",
      SurfaceVariantContainerHover: "#E5E5E5",
      SurfaceVariantContainerActive: "#D9D9D9",
      SurfaceVariantContainerLine: "#CCCCCC",
      SurfaceVariantOnContainer: "#000000",

      Primary: "#1858D5",
      PrimaryHover: "#164FC0",
      PrimaryActive: "#144BB5",
      PrimaryLine: "#1346AA",
      OnPrimary: "#FFFFFF",
      PrimaryContainer: "#E8EEFB",
      PrimaryContainerHover: "#DCE6F9",
      PrimaryContainerActive: "#D1DEF7",
      PrimaryContainerLine: "#C5D5F5",
      OnPrimaryContainer: "#113E95",

      Secondary: "#000000",
      SecondaryHover: "#1A1A1A",
      SecondaryActive: "#262626",
      SecondaryLine: "#333333",
      OnSecondary: "#FFFFFF",
      SecondaryContainer: "#E5E5E5",
      SecondaryContainerHover: "#D9D9D9",
      SecondaryContainerActive: "#CCCCCC",
      SecondaryContainerLine: "#BFBFBF",
      OnSecondaryContainer: "#0D0D0D",

      Success: "#00844C",
      SuccessHover: "#007744",
      SuccessActive: "#007041",
      SuccessLine: "#006A3D",
      OnSuccess: "#FFFFFF",
      SuccessContainer: "#E5F3ED",
      SuccessContainerHover: "#D9EDE4",
      SuccessContainerActive: "#CCE6DB",
      SuccessContainerLine: "#BFE0D2",
      OnSuccessContainer: "#005C35",

      Warning: "#A85400",
      WarningHover: "#974C00",
      WarningActive: "#8F4700",
      WarningLine: "#864300",
      OnWarning: "#FFFFFF",
      WarningContainer: "#F6EEE5",
      WarningContainerHover: "#F2E5D9",
      WarningContainerActive: "#EEDDCC",
      WarningContainerLine: "#E9D4BF",
      OnWarningContainer: "#763B00",

      Critical: "#C40E0E",
      CriticalHover: "#AC0909",
      CriticalActive: "#A60C0C",
      CriticalLine: "#9C0B0B",
      OnCritical: "#FFFFFF",
      CriticalContainer: "#F9E7E7",
      CriticalContainerHover: "#F6DBDB",
      CriticalContainerActive: "#F3CFCF",
      CriticalContainerLine: "#F0C3C3",
      OnCriticalContainer: "#890A0A",

      FocusRing: "rgba(0 0 0 / 50%)",
    },
    opacity: {
      P500: 1,
      P400: 0.9,
      P300: 0.75,
      Disabled: 0.38,
    },
    outline: {
      FocusRing: "$borderWidths$600 solid $colors$FocusRing",
    },
  },
  themeMap: {
    ...Stitches.defaultThemeMap,
    opacity: "opacity",
    outline: "outline",
  },
  media: {
    hover: "(any-hover: hover)",
  },
  utils: {
    p: (value: Stitches.PropertyValue<"padding">) => ({
      padding: value,
    }),
    pT: (value: Stitches.PropertyValue<"paddingTop">) => ({
      paddingTop: value,
    }),
    pR: (value: Stitches.PropertyValue<"paddingRight">) => ({
      paddingRight: value,
    }),
    pB: (value: Stitches.PropertyValue<"paddingBottom">) => ({
      paddingBottom: value,
    }),
    pL: (value: Stitches.PropertyValue<"paddingLeft">) => ({
      paddingLeft: value,
    }),
    pX: (value: Stitches.PropertyValue<"paddingLeft">) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    pY: (value: Stitches.PropertyValue<"paddingTop">) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    m: (value: Stitches.PropertyValue<"margin">) => ({
      margin: value,
    }),
    mT: (value: Stitches.PropertyValue<"marginTop">) => ({
      marginTop: value,
    }),
    mR: (value: Stitches.PropertyValue<"marginRight">) => ({
      marginRight: value,
    }),
    mB: (value: Stitches.PropertyValue<"marginBottom">) => ({
      marginBottom: value,
    }),
    mL: (value: Stitches.PropertyValue<"marginLeft">) => ({
      marginLeft: value,
    }),
    mX: (value: Stitches.PropertyValue<"marginLeft">) => ({
      marginLeft: value,
      marginRight: value,
    }),
    mY: (value: Stitches.PropertyValue<"marginTop">) => ({
      marginTop: value,
      marginBottom: value,
    }),

    d: (value: Stitches.PropertyValue<"display">) => ({ display: value }),
    po: (value: Stitches.PropertyValue<"position">) => ({ position: value }),

    fxD: (value: Stitches.PropertyValue<"flexDirection">) => ({ flexDirection: value }),
    fxW: (value: Stitches.PropertyValue<"flexWrap">) => ({ flexWrap: value }),

    juC: (value: Stitches.PropertyValue<"justifyContent">) => ({ justifyContent: value }),
    alI: (value: Stitches.PropertyValue<"alignItems">) => ({ alignItems: value }),
    alC: (value: Stitches.PropertyValue<"alignContent">) => ({ alignContent: value }),
    alS: (value: Stitches.PropertyValue<"alignSelf">) => ({ alignSelf: value }),

    fx: (value: Stitches.PropertyValue<"flex">) => ({ flex: value }),
    fxG: (value: Stitches.PropertyValue<"flexGrow">) => ({ flexGrow: value }),
    fxS: (value: Stitches.PropertyValue<"flexShrink">) => ({ flexShrink: value }),
    fxB: (value: Stitches.PropertyValue<"flexBasis">) => ({ flexBasis: value }),

    w: (value: Stitches.PropertyValue<"width">) => ({
      width: value,
    }),
    h: (value: Stitches.PropertyValue<"height">) => ({
      height: value,
    }),
    size: (value: Stitches.PropertyValue<"width">) => ({
      width: value,
      height: value,
    }),
    minSize: (value: Stitches.PropertyValue<"minWidth">) => ({
      minWidth: value,
      minHeight: value,
    }),
    maxSize: (value: Stitches.PropertyValue<"maxWidth">) => ({
      maxWidth: value,
      maxHeight: value,
    }),

    c: (value: Stitches.PropertyValue<"color">) => ({
      color: value,
    }),

    b: (value: Stitches.PropertyValue<"background">) => ({
      background: value,
    }),
    bC: (value: Stitches.PropertyValue<"backgroundColor">) => ({
      backgroundColor: value,
    }),
    bI: (value: Stitches.PropertyValue<"backgroundImage">) => ({
      backgroundImage: value,
    }),

    bo: (value: Stitches.PropertyValue<"border">) => ({
      border: value,
    }),

    boR: (value: Stitches.PropertyValue<"borderRadius">) => ({
      borderRadius: value,
    }),

    bxS: (value: Stitches.PropertyValue<"boxShadow">) => ({ boxShadow: value }),

    tA: (value: Stitches.PropertyValue<"textAlign">) => ({ textAlign: value }),
    tT: (value: Stitches.PropertyValue<"textTransform">) => ({ textTransform: value }),
    tD: (value: Stitches.PropertyValue<"textDecoration">) => ({ textDecoration: value }),
    tO: (value: Stitches.PropertyValue<"textOverflow">) => ({ textOverflow: value }),

    fS: (value: Stitches.PropertyValue<"fontSize">) => ({ fontSize: value }),
    fW: (value: Stitches.PropertyValue<"fontWeight">) => ({ fontWeight: value }),
    fSt: (value: Stitches.PropertyValue<"fontStyle">) => ({ fontStyle: value }),

    lH: (value: Stitches.PropertyValue<"lineHeight">) => ({ lineHeight: value }),
    lS: (value: Stitches.PropertyValue<"letterSpacing">) => ({ letterSpacing: value }),

    userSelect: (value: Stitches.PropertyValue<"userSelect">) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),

    appearance: (value: Stitches.PropertyValue<"appearance">) => ({
      WebkitAppearance: value,
      appearance: value,
    }),
  },
});

export type CSS = Stitches.CSS<typeof config>;

export const globalStyles = globalCss({
  "*, *::before, *::after": {
    boxSizing: "border-box",
  },
  body: {
    fontFamily: "$Inter",
  },
});
globalStyles();
