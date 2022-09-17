import React from "react";
import { styled } from "../../config";

import { XSize } from "../types";
import { IconSrc } from "./Icons";

const StyledIcon = styled("svg", {
  width: "$$IconSize",
  height: "$$IconSize",
  variants: {
    size: {
      50: {
        $$IconSize: "$sizes$X50",
      },
      100: {
        $$IconSize: "$sizes$X100",
      },
      200: {
        $$IconSize: "$sizes$X200",
      },
      300: {
        $$IconSize: "$sizes$X300",
      },
      400: {
        $$IconSize: "$sizes$X400",
      },
      500: {
        $$IconSize: "$sizes$X500",
      },
      600: {
        $$IconSize: "$sizes$X600",
      },
    },
  },
  defaultVariants: {
    size: 400,
  },
});

export interface IconProps extends React.SVGAttributes<SVGElement> {
  color?: string;
  filled?: boolean;
  size?: XSize;
  src: IconSrc;
}
export const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", filled = false, size, src, ...props }, ref) => (
    <StyledIcon
      size={size}
      viewBox="0 0 24 24"
      fill="none"
      color={color}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      ref={ref}
    >
      {src(filled)}
    </StyledIcon>
  )
);
