import classNames from "classnames";
import React from "react";

import { as } from "../as";
import * as css from "./Badge.css";

export const Badge = as<"span", css.BadgeVariants>(
  ({ as: AsBadge = "span", className, size, variant, fill, radii, outlined, ...props }, ref) => (
    <AsBadge
      className={classNames(css.Badge({ size, variant, fill, radii, outlined }), className)}
      {...props}
      ref={ref}
    />
  )
);
