import { style } from "@vanilla-extract/css";
import { config } from "../theme/config.css";
import { vars } from "../theme/vars.css";

export const FocusOutline = style({
  selectors: {
    "&:focus-visible": {
      outline: vars.outline.FocusRing,
      outlineOffset: 0,
    },
  },
});

export const Disabled = style({
  selectors: {
    "&[disabled], &[aria-disabled=true]": {
      opacity: `${config.opacity.Disabled} !important`,
      cursor: "not-allowed",
    },
  },
});
