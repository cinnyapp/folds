import classNames from "classnames";
import React, { AllHTMLAttributes, forwardRef } from "react";

import { Icon, Icons } from "../icon";
import * as css from "./Checkbox.css";

type CheckboxProps = Omit<AllHTMLAttributes<HTMLInputElement>, "children" | "onChange" | "type"> &
  css.CheckboxVariants & {
    defaultChecked?: boolean;
    checked?: boolean;
  };

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, variant, size, style, ...props }, ref) => (
    <span className={classNames(css.Checkbox({ variant, size }), className)} style={style}>
      <input className={css.CheckboxInput} type="checkbox" {...props} ref={ref} />
      <Icon className={css.CheckboxIcon} aria-hidden size={size} src={Icons.Check} />
    </span>
  )
);
