import React, { ButtonHTMLAttributes, forwardRef } from "react";
import classNames from "classnames";
import { Icon, Icons } from "../icon";
import * as css from "./Switch.css";

type SwitchProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "value" | "onClick" | "onChange" | "children" | "role"
> & {
  value?: boolean;
  onChange?: (on: boolean) => void;
};
export const Switch = forwardRef<HTMLButtonElement, SwitchProps & css.SwitchVariants>(
  ({ className, variant, value = false, onChange, ...props }, ref) => {
    const handleClick = () => onChange?.(!value);

    return (
      <button
        className={classNames(css.Switch({ variant }), className)}
        role="switch"
        type="button"
        aria-checked={value}
        onClick={handleClick}
        {...props}
        ref={ref}
      >
        <span className={css.SwitchThumb} aria-hidden>
          <Icon src={Icons.Check} size="100" />
        </span>
      </button>
    );
  }
);
