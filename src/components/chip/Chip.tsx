import classNames from "classnames";
import React, { ReactNode } from "react";
import { as } from "../as";

import * as css from "./Chip.css";

type ChipProps = {
  before?: ReactNode;
  after?: ReactNode;
};

export const Chip = as<"button", ChipProps & css.ChipVariants>(
  (
    {
      as: AsChip = "button",
      className,
      variant,
      size,
      outlined,
      radii,
      before,
      after,
      children,
      ...props
    },
    ref
  ) => (
    <AsChip
      className={classNames(
        css.Chip({
          variant,
          size,
          outlined,
          radii,
        }),
        className
      )}
      data-ui-before={before ? true : undefined}
      data-ui-after={after ? true : undefined}
      {...props}
      ref={ref}
    >
      {before}
      {children}
      {after}
    </AsChip>
  )
);
