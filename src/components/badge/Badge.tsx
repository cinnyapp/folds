import classNames from "classnames";
import React from "react";

import { as } from "../as";
import * as css from "./Badge.css";

export const Badge = as<"span", css.BadgeVariants>(
  ({ as: AsBadge = "span", className, variant, fill, outlined, ...props }, ref) => (
    <AsBadge
      className={classNames(css.Badge({ variant, fill, outlined }), className)}
      {...props}
      ref={ref}
    />
  )
);
