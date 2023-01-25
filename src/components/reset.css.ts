import { style } from "@vanilla-extract/css";

export const TextReset = style({
  color: "inherit",
  fontFamily: "inherit",
  fontSize: "inherit",
  lineHeight: "inherit",
  letterSpacing: "inherit",
});

export const DefaultReset = style([
  TextReset,
  {
    margin: 0,
    padding: 0,
    border: "0 solid currentColor",
    boxShadow: "none",

    appearance: "none",
    WebkitTapHighlightColor: "transparent",

    selectors: {
      "&, &::before, &::after": {
        boxSizing: "border-box",
      },
    },
  },
]);
