import React, { AllHTMLAttributes, forwardRef, ReactNode } from "react";
import classNames from "classnames";
import * as css from "./Input.css";

type InputProps = AllHTMLAttributes<HTMLInputElement> & {
  before?: ReactNode;
  after?: ReactNode;
};

export const Input = forwardRef<HTMLInputElement, InputProps & css.InputVariants>(
  ({ className, style, variant, size, outlined, radii, before, after, ...props }, ref) => (
    <div
      className={classNames(css.Input({ variant, size, outlined, radii }), className)}
      style={style}
      data-ui-before={before ? true : undefined}
      data-ui-after={after ? true : undefined}
    >
      {before}
      <input className={css.InputInput} {...props} ref={ref} />
      {after}
    </div>
  )
);
