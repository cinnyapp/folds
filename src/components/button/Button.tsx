import React, { ReactNode } from "react";
import classNames from "classnames";
import { as } from "../as";
import * as css from "./Button.css";

type ButtonProps = {
  before?: ReactNode;
  after?: ReactNode;
};

export const Button = as<"button", css.ButtonVariants & ButtonProps>(
  (
    {
      as: AsButton = "button",
      className,
      size,
      variant,
      fill,
      outlined,
      radii,
      before,
      after,
      children,
      ...props
    },
    ref
  ) => (
    <AsButton
      className={classNames(css.Button({ size, variant, fill, outlined, radii }), className)}
      data-ui-before={before ? true : undefined}
      data-ui-after={after ? true : undefined}
      {...props}
      ref={ref}
    >
      {before}
      {children}
      {after}
    </AsButton>
  )
);
