import React from "react";
import classNames from "classnames";
import * as css from "./Menu.css";
import { as } from "../as";

export const Menu = as<"div", css.MenuVariants>(
  ({ as: AsMenu = "div", className, variant, ...props }, ref) => (
    <AsMenu className={classNames(css.Menu({ variant }), className)} {...props} ref={ref} />
  )
);
