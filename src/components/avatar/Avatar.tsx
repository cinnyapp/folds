import classNames from "classnames";
import React from "react";
import { as } from "../as";
import * as css from "./Avatar.css";

export const Avatar = as<"span", css.AvatarVariants>(
  ({ as: AsAvatar = "span", size, radii, className, ...props }, ref) => (
    <AsAvatar className={classNames(css.Avatar({ size, radii }), className)} {...props} ref={ref} />
  )
);

export const AvatarImage = as<"img">(({ as: AsAvatarImage = "img", className, ...props }, ref) => (
  <AsAvatarImage className={classNames(css.AvatarImage, className)} {...props} ref={ref} />
));

export const AvatarFallback = as<"span">(
  ({ as: AsAvatarFallback = "span", className, ...props }, ref) => (
    <AsAvatarFallback className={classNames(css.AvatarFallback, className)} {...props} ref={ref} />
  )
);
