import React, { AllHTMLAttributes, forwardRef, ReactNode } from "react";
import { CSS, styled, toRem, VariantProps } from "../../config";
import { ContainerColor } from "../types";

const getVariant = (variant: ContainerColor): CSS => ({
  color: `$On${variant}Container`,
  backgroundColor: `$${variant}Container`,
  $$InputBorderColor: `$colors$${variant}ContainerLine`,

  "&:has(input:focus)": {
    boxShadow: "inset 0 0 0 $borderWidths$600 $$InputBorderColor",
  },
  "@supports not selector(:has(input:focus))": {
    "&:focus-within": {
      boxShadow: "inset 0 0 0 $borderWidths$600 $$InputBorderColor",
    },
  },
});

export const StyledInput = styled("span", {
  "&, & input": {
    padding: 0,
    margin: 0,
    border: "none",
    boxShadow: "none",
    appearance: "none",
  },
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  borderRadius: "$400",

  "& input": {
    height: "100%",
    minWidth: 0,
    flexGrow: 1,
    backgroundColor: "transparent",
    "&:focus": {
      outline: "none",
    },
  },

  "&[disabled], &[aria-disabled=true]": {
    opacity: "$Disabled",
    cursor: "not-allowed",
  },

  variants: {
    variant: {
      Background: getVariant("Background"),
      Surface: getVariant("Surface"),
      SurfaceVariant: getVariant("SurfaceVariant"),
      Primary: getVariant("Primary"),
      Secondary: getVariant("Secondary"),
      Success: getVariant("Success"),
      Warning: getVariant("Warning"),
      Critical: getVariant("Critical"),
    },
    size: {
      300: {
        padding: "0 $200",
        gap: "$100",
        height: toRem(32),
        "& input": {
          fontSize: "$T200",
          lineHeight: "$T200",
          letterSpacing: "$T200",
        },
      },
      400: {
        padding: "0 $300",
        gap: "$200",
        height: toRem(40),
        "& input": {
          fontSize: "$T300",
          lineHeight: "$T300",
          letterSpacing: "$T300",
        },
      },
      500: {
        padding: "0 $400",
        gap: "$300",
        height: toRem(48),
        "& input": {
          fontSize: "$T400",
          lineHeight: "$T400",
          letterSpacing: "$T400",
        },
      },
    },
    outlined: {
      true: {
        boxShadow: "inset 0 0 0 $borderWidths$400 $$InputBorderColor",
      },
    },
  },
  defaultVariants: {
    variant: "Background",
    size: 400,
  },
});

type InputVariant = VariantProps<typeof StyledInput>;
interface InputProps extends AllHTMLAttributes<HTMLInputElement> {
  before?: ReactNode;
  after?: ReactNode;
  css?: CSS;
}

export const Input = forwardRef<HTMLSpanElement, InputProps & InputVariant>(
  ({ className, style, css, variant, size, outlined, before, after, ...props }, ref) => (
    <StyledInput
      className={className}
      style={style}
      variant={variant}
      size={size}
      outlined={outlined}
      data-ui-before={before ? true : undefined}
      data-ui-after={after ? true : undefined}
      css={css}
      ref={ref}
    >
      {before}
      <input {...props} />
      {after}
    </StyledInput>
  )
);
