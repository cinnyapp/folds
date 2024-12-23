import React, { AllHTMLAttributes, forwardRef } from "react";
import classNames from "classnames";
import * as css from "./TextArea.css";

export const TextArea = forwardRef<
  HTMLTextAreaElement,
  AllHTMLAttributes<HTMLTextAreaElement> & css.TextAreaVariants
>(({ className, variant, size, outlined, radii, resize, ...props }, ref) => (
  <textarea
    className={classNames(css.TextArea({ variant, size, outlined, radii, resize }), className)}
    {...props}
    ref={ref}
  />
));
