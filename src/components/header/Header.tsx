import classNames from "classnames";
import React from "react";
import { as } from "../as";
import * as css from "./Header.css";

export const Header = as<"header", css.HeaderVariants>(
  ({ as: AsHeader = "header", className, variant, size, ...props }, ref) => (
    <AsHeader
      className={classNames(css.Header({ variant, size }), className)}
      {...props}
      ref={ref}
    />
  )
);
