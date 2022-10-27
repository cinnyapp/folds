import React, { forwardRef, HTMLAttributes } from "react";
import { CSS, styled, VariantProps } from "../../config";
import { MainColor } from "../types";

const getVariant = (variant: MainColor) => ({
  color: `$${variant}`,
});

const StyledRadioButton = styled("input", {
  "&[type=radio]": {
    padding: "0",
    margin: "0",
    appearance: "none",
    WebkitTapHighlightColor: "transparent",
  },

  width: "$$RadioButtonSize",
  height: "$$RadioButtonSize",
  borderRadius: "$Round",
  boxShadow: "inset 0 0 0 $borderWidths$400 CurrentColor",
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",

  "&:checked::after": {
    content: "",
    position: "absolute",
    display: "inline-block",
    width: "60%",
    height: "60%",
    color: "currentColor",
    borderRadius: "$Round",
    backgroundColor: "currentColor",
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
        $$RadioButtonSize: "$sizes$X50",
      },
      100: {
        $$RadioButtonSize: "$sizes$X100",
      },
      200: {
        $$RadioButtonSize: "$sizes$X200",
      },
      300: {
        $$RadioButtonSize: "$sizes$X300",
      },
      400: {
        $$RadioButtonSize: "$sizes$X400",
      },
      500: {
        $$RadioButtonSize: "$sizes$X500",
      },
      600: {
        $$RadioButtonSize: "$sizes$X600",
      },
    },
  },
  defaultVariants: {
    variant: "Secondary",
    size: "400",
  },
});

type RadioButtonVariant = VariantProps<typeof StyledRadioButton>;

interface RadioButtonProps extends Omit<HTMLAttributes<HTMLInputElement>, "type" | "onChange"> {
  defaultChecked?: boolean;
  checked?: boolean;
  css?: CSS;
}

export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps & RadioButtonVariant>(
  ({ ...props }, ref) => <StyledRadioButton {...props} type="radio" ref={ref} />
);
