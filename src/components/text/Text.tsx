import React from "react";
import classNames from "classnames";
import * as css from "./Text.css";
import { as } from "../as";

export const Text = as<"p", css.TextVariants>(
  ({ as: AsText = "p", className, size, truncate, align, priority, ...props }, ref) => (
    <AsText
      className={classNames(css.Text({ size, truncate, align, priority }), className)}
      {...props}
      ref={ref}
    />
  )
);
