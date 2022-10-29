import React, { AllHTMLAttributes, forwardRef } from "react";

import { CSS, styled, VariantProps } from "../../config";
import { Icon, Icons } from "../icon";
import { MainColor } from "../types";

const getVariant = (variant: MainColor): CSS => ({
  "input[type=checkbox]:checked": {
    boxShadow: "none",
    backgroundColor: `$${variant}`,
    "& + *": {
      color: `$On${variant}`,
    },
  },
});

const StyledCheckbox = styled("span", {
  padding: "0",
  margin: "0",
  width: "$$CheckboxSize",
  height: "$$CheckboxSize",
  WebkitTapHighlightColor: "transparent",

  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",

  "input, input[type=checkbox]": {
    appearance: "none",
    margin: 0,
    padding: 0,
    border: "none",
    cursor: "pointer",
    borderRadius: "$300",
    boxShadow: "inset 0 0 0 $borderWidths$400 CurrentColor",

    "& + *": {
      color: "transparent",
      pointerEvents: "none",
    },
    "&:not(:checked)": {
      opacity: "$P300",
    },
    "&:focus-visible": {
      outline: "$FocusRing",
    },

    "&[disabled], &[aria-disabled=true]": {
      opacity: "$Disabled",
      cursor: "not-allowed",
      "& + *": {
        opacity: "$Disabled",
      },
    },
  },
  "& > *": {
    position: "absolute",
    width: "100%",
    height: "100%",
  },

  variants: {
    variant: {
      Primary: getVariant("Primary"),
      Secondary: getVariant("Secondary"),
      Success: getVariant("Success"),
      Warning: getVariant("Warning"),
      Critical: getVariant("Critical"),
    },
    size: {
      50: {
        $$CheckboxSize: "$sizes$X50",
      },
      100: {
        $$CheckboxSize: "$sizes$X100",
      },
      200: {
        $$CheckboxSize: "$sizes$X200",
      },
      300: {
        $$CheckboxSize: "$sizes$X300",
      },
      400: {
        $$CheckboxSize: "$sizes$X400",
      },
      500: {
        $$CheckboxSize: "$sizes$X500",
      },
      600: {
        $$CheckboxSize: "$sizes$X600",
      },
    },
  },

  defaultVariants: {
    variant: "Secondary",
    size: "400",
  },
});

type CheckboxVariant = VariantProps<typeof StyledCheckbox>;
interface CheckboxProps extends Omit<AllHTMLAttributes<HTMLInputElement>, "children" | "onChange"> {
  defaultChecked?: boolean;
  checked?: boolean;
  css?: CSS;
}

export const Checkbox = forwardRef<HTMLSpanElement, CheckboxVariant & CheckboxProps>(
  ({ className, variant, size, style, css, ...props }, ref) => (
    <StyledCheckbox
      className={className}
      variant={variant}
      size={size}
      style={style}
      ref={ref}
      css={css}
    >
      <input type="checkbox" {...props} />
      <Icon aria-hidden size={size} src={Icons.Check} />
    </StyledCheckbox>
  )
);
