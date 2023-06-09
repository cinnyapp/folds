import { createTheme } from "@vanilla-extract/css";
import { color } from "./color.css";
import { config } from "./config.css";

export const [varsClass, vars] = createTheme({
  outline: {
    FocusRing: `${config.borderWidth.B600} solid ${color.Other.FocusRing}`,
  },
});
