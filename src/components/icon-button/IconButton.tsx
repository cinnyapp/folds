import React from "react";
import classNames from "classnames";
import { as } from "../as";
import * as css from "./IconButton.css";

export const IconButton = as<"button", css.IconButtonVariants>(
  (
    { as: AsIconButton = "button", className, size, variant, fill, radii, outlined, ...props },
    ref
  ) => (
    <AsIconButton
      className={classNames(css.IconButton({ variant, fill, size, radii, outlined }), className)}
      {...props}
      ref={ref}
    />
  )
);
