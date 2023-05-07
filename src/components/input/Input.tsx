import React, { AllHTMLAttributes, forwardRef, ReactNode } from "react";
import classNames from "classnames";
import * as css from "./Input.css";

type InputProps = Omit<AllHTMLAttributes<HTMLInputElement>, "size"> & {
  before?: ReactNode;
  after?: ReactNode;
  inputSize?: number;
};

export const Input = forwardRef<HTMLInputElement, InputProps & css.InputVariants>(
  (
    { className, style, variant, size, inputSize = 1, outlined, radii, before, after, ...props },
    ref
  ) => (
    <div
      className={classNames(css.Input({ variant, size, outlined, radii }), className)}
      style={style}
      data-ui-before={before ? true : undefined}
      data-ui-after={after ? true : undefined}
    >
      {before}
      <input className={css.InputInput} size={inputSize} {...props} ref={ref} />
      {after}
    </div>
  )
);
