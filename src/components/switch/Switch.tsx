import React, { ButtonHTMLAttributes, forwardRef } from "react";
import { CSS, styled, toRem, VariantProps } from "../../config";
import { Icon, Icons } from "../icon";
import { MainColor } from "../types";

const getVariant = (variant: MainColor) => ({
  "&[aria-checked=true]": {
    backgroundColor: `$${variant}`,
    color: `$On${variant}`,
    boxShadow: "none",

    "& > span": {
      width: toRem(18),
      height: toRem(18),
      borderColor: "CurrentColor",
      transform: `translateX(${toRem(23)})`,
      backgroundColor: `$On${variant}`,
      color: `$${variant}`,
    },
  },
});

const StyledSwitch = styled("button", {
  padding: 0,
  margin: 0,
  background: "transparent",
  border: "none",
  appearance: "none",
  WebkitTapHighlightColor: "transparent",

  display: "inline-flex",
  alignItems: "center",
  width: toRem(44),
  height: toRem(24),
  boxShadow: "inset 0 0 0 $borderWidths$400 CurrentColor",
  color: "CurrentColor",
  borderRadius: "$Pill",
  cursor: "pointer",

  "& > span": {
    width: toRem(14),
    height: toRem(14),
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",

    transform: `translateX(${toRem(5)})`,
    backgroundColor: "CurrentColor",
    borderRadius: "$Pill",
    borderWidth: "$500",
  },

  "&[aria-checked=false]": {
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
  },
  defaultVariants: {
    variant: "Primary",
  },
});

type SwitchVariant = VariantProps<typeof StyledSwitch>;
export interface SwitchProps
  extends Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "value" | "onClick" | "onChange" | "children"
  > {
  value?: boolean;
  onChange?: (on: boolean) => void;
  css?: CSS;
}
export const Switch = forwardRef<HTMLButtonElement, SwitchProps & SwitchVariant>(
  ({ value = false, onChange, ...props }, ref) => {
    const handleClick = () => onChange?.(!value);

    return (
      <StyledSwitch role="switch" aria-checked={value} onClick={handleClick} {...props} ref={ref}>
        <span aria-hidden>
          <Icon src={Icons.Check} size="100" />
        </span>
      </StyledSwitch>
    );
  }
);
