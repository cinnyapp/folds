import React, { forwardRef, SVGAttributes } from "react";
import classNames from "classnames";
import * as css from "./Icon.css";

import { IconSrc } from "./Icons";

export type IconProps = SVGAttributes<SVGElement> & {
  filled?: boolean;
  src: IconSrc;
};
export const Icon = forwardRef<SVGSVGElement, IconProps & css.IconVariants>(
  ({ className, size, filled = false, src, ...props }, ref) => (
    <svg
      className={classNames(css.Icon({ size }), className)}
      focusable="false"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      ref={ref}
    >
      {src(filled)}
    </svg>
  )
);
