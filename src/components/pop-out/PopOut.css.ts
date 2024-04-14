import { style } from "@vanilla-extract/css";
import { config } from "../../theme";

export const PopOut = style({
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: config.zIndex.Max,
  ...style,
});

export const PopOutContainer = style({
  display: "inline-block",
  position: "fixed",
  maxWidth: "100vw",
  maxHeight: "100vh",
});
