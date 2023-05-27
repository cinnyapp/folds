import { keyframes, style } from "@vanilla-extract/css";
import { config } from "../../theme/config.css";
import { DefaultReset } from "../reset.css";

export const Overlay = style([
  DefaultReset,
  {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: config.zIndex.Max,
  },
]);

const OverlayBackdropAnime = keyframes({
  "0%": {
    opacity: "0",
  },
  "100%": {
    opacity: ".5",
  },
});

export const OverlayBackdrop = style([
  DefaultReset,
  {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: -1,
    backgroundColor: "black",
    opacity: ".5",
    animation: `${OverlayBackdropAnime} 100ms`,
  },
]);

export const OverlayCenter = style([
  DefaultReset,
  {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
]);
