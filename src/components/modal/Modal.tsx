import React from "react";
import classNames from "classnames";
import * as css from "./Modal.css";
import { as } from "../as";

export const Modal = as<"div", css.ModalVariants>(
  ({ as: AsModal = "div", className, variant, size, flexHeight, ...props }, ref) => (
    <AsModal
      className={classNames(css.Modal({ variant, size, flexHeight }), className)}
      {...props}
      ref={ref}
    />
  )
);
