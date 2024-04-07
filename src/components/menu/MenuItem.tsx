import classNames from "classnames";
import React, { ReactNode } from "react";
import { as } from "../as";
import * as css from "./MenuItem.css";

type MenuItemProps = {
  before?: ReactNode;
  after?: ReactNode;
};

export const MenuItem = as<"button", MenuItemProps & css.MenuItemVariants>(
  (
    {
      as: AsMenuItem = "button",
      className,
      variant,
      fill,
      size,
      radii,
      before,
      after,
      children,
      ...props
    },
    ref
  ) => (
    <AsMenuItem
      className={classNames(css.MenuItem({ variant, fill, size, radii }), className)}
      data-ui-before={before ? true : undefined}
      data-ui-after={after ? true : undefined}
      {...props}
      ref={ref}
    >
      {before}
      {children}
      {after}
    </AsMenuItem>
  )
);
