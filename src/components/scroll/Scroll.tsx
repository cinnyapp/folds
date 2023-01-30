import React from "react";
import classNames from "classnames";
import * as css from "./Scroll.css";
import { as } from "../as";

export const Scroll = as<"div", css.ScrollVariants>(
  (
    { as: AsScroll = "div", className, variant, visibility, hideTrack, size, direction, ...props },
    ref
  ) => (
    <AsScroll
      className={classNames(
        css.Scroll({
          variant,
          visibility,
          hideTrack,
          size,
          direction,
        }),
        className
      )}
      {...props}
      ref={ref}
    />
  )
);
