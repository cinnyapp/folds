import classNames from "classnames";
import React from "react";
import { as } from "../as";
import * as css from "./Dialog.css";

export const Dialog = as<"div", css.DialogVariants>(
  ({ as: AsDialog = "div", className, variant, ...props }, ref) => (
    <AsDialog className={classNames(css.Dialog({ variant }), className)} {...props} ref={ref} />
  )
);
