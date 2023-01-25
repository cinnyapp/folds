import React from "react";
import classNames from "classnames";
import * as css from "./Spinner.css";
import { as } from "../as";

const SpinnerSvg = () => (
  <svg
    className={css.SpinnerSvg}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      className={css.SpinnerOuter}
      d="M5.98986 18.0104C7.52806 19.5486 9.65306 20.5 12.0003 20.5C16.6947 20.5 20.5003 16.6944 20.5003 12C20.5003 7.30558 16.6947 3.5 12.0003 3.5C9.65306 3.5 7.52806 4.45139 5.98986 5.98959L4.9292 4.92893C6.73884 3.11929 9.23884 2 12.0003 2C17.5231 2 22.0003 6.47715 22.0003 12C22.0003 17.5228 17.5231 22 12.0003 22C9.23884 22 6.73884 20.8807 4.9292 19.0711L5.98986 18.0104Z"
    />
    <path
      className={css.SpinnerInner}
      d="M4.92908 19.0711C3.1204 17.2624 2.00134 14.7641 2.00015 12.0044L2.00015 11.9956C2.00134 9.23593 3.1204 6.73763 4.92909 4.92896L5.98975 5.98962C4.45155 7.52781 3.50015 9.65281 3.50015 12C3.50015 14.3472 4.45155 16.4722 5.98975 18.0104L4.92908 19.0711Z"
    />
  </svg>
);

export const Spinner = as<"span", css.SpinnerVariants>(
  ({ as: AsSpinner = "span", className, size, variant, fill, ...props }, ref) => (
    <AsSpinner
      className={classNames(css.Spinner({ size, variant, fill }), className)}
      {...props}
      ref={ref}
    >
      <SpinnerSvg />
    </AsSpinner>
  )
);
