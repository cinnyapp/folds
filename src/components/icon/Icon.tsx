import React from "react";
import { CSS, styled, VariantProps } from "../../config";

import { IconSrc } from "./Icons";

const StyledIcon = styled("svg", {
  width: "$$IconSize",
  height: "$$IconSize",
  color: "currentColor",
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

type IconVariants = VariantProps<typeof StyledIcon>;
export interface IconProps extends React.SVGAttributes<SVGElement> {
  css?: CSS;
  filled?: boolean;
  src: IconSrc;
}
export const Icon = React.forwardRef<SVGSVGElement, IconProps & IconVariants>(
  ({ css, filled = false, src, ...props }, ref) => (
    <StyledIcon
      focusable="false"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      css={css}
      {...props}
      ref={ref}
    >
      {src(filled)}
    </StyledIcon>
  )
);
