import React from "react";
import classNames from "classnames";
import * as css from "./Text.css";
import { as } from "../as";
import { Tooltip, TooltipProvider } from "../tooltip";
import { Align, Position } from "../util";

export type TruncateTooltipProps = {
  position?: Position;
  offset?: number;
  align?: Align;
  alignOffset?: number;
  delay?: number;
};

export type TextProps = {
  truncateTooltip?: TruncateTooltipProps | boolean;
} & css.TextVariants;

export const Text = as<"p", TextProps>(
  ({ as: AsText = "p", className, size, truncate, align, priority, children, ...props }, ref) => {
    if (truncate && props.truncateTooltip) {
      const tooltipProps: TruncateTooltipProps = {
        delay: 1000,
      };
      if (typeof props.truncateTooltip === "object") {
        const src = props.truncateTooltip as any;
        const dst = tooltipProps as any;
        Object.keys(src).forEach((key) => {
          if (typeof src[key] !== "undefined") dst[key] = src[key];
        });
      }
      return (
        <TooltipProvider
          {...tooltipProps}
          tooltip={
            <Tooltip>
              <Text size="T300">{children}</Text>
            </Tooltip>
          }
          ref={ref}
        >
          {(subref) => (
            <AsText
              className={classNames(css.Text({ size, truncate, align, priority }), className)}
              {...props}
              ref={subref}
            >
              {children}
            </AsText>
          )}
        </TooltipProvider>
      );
    }

    return (
      <AsText
        className={classNames(css.Text({ size, truncate, align, priority }), className)}
        {...props}
        ref={ref}
      >
        {children}
      </AsText>
    );
  }
);
