import React, { AllHTMLAttributes, forwardRef } from "react";
import classNames from "classnames";
import * as css from "./RadioButton.css";

type RadioButtonProps = Omit<AllHTMLAttributes<HTMLInputElement>, "type" | "onChange" | "size"> & {
  defaultChecked?: boolean;
  checked?: boolean;
};

export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps & css.RadioButtonVariants>(
  ({ className, variant, size, ...props }, ref) => (
    <input
      className={classNames(css.RadioButton({ variant, size }), className)}
      {...props}
      type="radio"
      ref={ref}
    />
  )
);
