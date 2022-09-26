import React, { ButtonHTMLAttributes, forwardRef } from "react";
import { CSS, keyframes, styled, VariantProps } from "../../config";
import { Icon, Icons } from "../icon";
import { MainColor } from "../types";

const SwitchOnThumbAnime = keyframes({
  "0%": {
    width: 14,
    height: 14,
    transform: "translateX(5px)",
    color: "transparent",
  },
  "10%": {
    width: "$X100",
    height: "$X100",
    transform: "translateX(3px)",
    color: "transparent",
  },
  "50%": {
    width: 38,
    height: "$X100",
    transform: "translateX(3px)",
    color: "transparent",
  },
  "100%": {
    width: "$X100",
    height: "$X100",
    transform: "translateX(23px)",
  },
});

const SwitchOffThumbAnime = keyframes({
  "0%": {
    width: "$X100",
    height: "$X100",
    transform: "translateX(23px)",
  },
  "10%": {
    width: 14,
    height: 14,
    transform: "translateX(25px)",
  },
  "50%": {
    width: 34,
    height: 14,
    transform: "translateX(5px)",
  },
  "100%": {
    width: 14,
    height: 14,
    transform: "translateX(5px)",
  },
});

const getVariant = (variant: MainColor) => ({
  "&[aria-checked=true]": {
    backgroundColor: `$${variant}`,
    color: `$On${variant}`,
    boxShadow: "none",

    "& > span": {
      width: "$X100",
      height: "$X100",
      borderColor: "CurrentColor",
      transform: "translateX(23px)",
      backgroundColor: `$On${variant}`,
      color: `$${variant}`,
      animation: `${SwitchOnThumbAnime} 300ms ease-in-out`,
    },
  },

  "&:focus-visible": {
    outline: "$FocusRing",
  },
});

const StyledSwitch = styled("button", {
  $$SwitchWidth: "44px",
  $$SwitchHeight: "24px",
  padding: 0,
  margin: 0,
  background: "transparent",
  border: "none",
  appearance: "none",
  WebkitTapHighlightColor: "transparent",

  display: "inline-flex",
  alignItems: "center",
  width: "$$SwitchWidth",
  height: "$$SwitchHeight",
  boxShadow: "inset 0 0 0 $borderWidths$400 CurrentColor",
  color: "CurrentColor",
  borderRadius: "$Pill",
  cursor: "pointer",

  "& > span": {
    minWidth: 14,
    minHeight: 14,
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",

    transform: "translateX(5px)",
    backgroundColor: "CurrentColor",
    borderRadius: "$Pill",
    borderWidth: "$500",

    position: "relative",
    "& > svg": {
      position: "absolute",
    },
  },

  "&[aria-checked=false]": {
    opacity: "$P300",
    "& > span": {
      animation: `${SwitchOffThumbAnime} 300ms ease-in-out`,
    },
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
    variant: "Secondary",
  },
});

type SwitchVariant = VariantProps<typeof StyledSwitch>;
export interface SwitchProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "value" | "onChange" | "children"> {
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
