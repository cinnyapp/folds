import classNames from "classnames";
import React from "react";
import { as } from "../as";
import { percent } from "../util";

import * as css from "./ProgressBar.css";

type ProgressBarProps = {
  value: number;
  min?: number;
  max: number;
};

export const ProgressBar = as<"span", ProgressBarProps & css.ProgressBarVariant>(
  (
    {
      as: AsProgressBar = "span",
      className,
      variant,
      size,
      fill,
      radii,
      outlined,
      value,
      min = 0,
      max,
      ...props
    },
    ref
  ) => (
    <AsProgressBar
      className={classNames(css.ProgressBar({ variant, size, fill, radii, outlined }), className)}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={min}
      aria-valuemax={max}
      {...props}
      ref={ref}
    >
      <span className={css.ProgressBarFill} style={{ width: `${percent(min, max, value)}%` }} />
    </AsProgressBar>
  )
);
