import classNames from "classnames";
import React from "react";
import { as } from "../as";

import * as css from "./Box.css";

export const Box = as<"div", css.BoxVariants>(
  (
    {
      as: AsBox = "div",
      className,
      display,
      direction,
      wrap,
      justifyContent,
      justifyItems,
      justifySelf,
      alignContent,
      alignItems,
      alignSelf,
      gap,
      grow,
      shrink,
      basis,
      ...props
    },
    ref
  ) => (
    <AsBox
      className={classNames(
        css.Box({
          display,
          direction,
          wrap,
          justifyContent,
          justifyItems,
          justifySelf,
          alignContent,
          alignItems,
          alignSelf,
          gap,
          grow,
          shrink,
          basis,
        }),
        className
      )}
      {...props}
      ref={ref}
    />
  )
);
