import React from "react";
import classNames from "classnames";
import * as css from "./Line.css";
import { as } from "../as";

export const Line = as<"div", css.LineVariants>(
  ({ as: AsLine = "div", className, variant, direction, size, ...props }, ref) => (
    <AsLine
      className={classNames(css.Line({ variant, direction, size }), className)}
      {...props}
      ref={ref}
    />
  )
);
