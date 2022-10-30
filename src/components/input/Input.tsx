import React, { ElementType, ReactNode } from "react";
import { CSS, styled, toRem, VariantProps } from "../../config";
import { AsComponentProps, ContainerColor } from "../types";

const getVariant = (variant: ContainerColor): CSS => ({
  backgroundColor: `$${variant}Container`,
});

export const StyledInput = styled("div", {
  "&, & input": {
    padding: 0,
    margin: 0,
    border: "none",
    boxShadow: "none",
    appearance: "none",
  },
  display: "flex",
  flexWrap: "wrap",
  borderRadius: "$400",

  "& input": {
    minWidth: 0,
    flexGrow: 1,
    backgroundColor: "transparent",
    borderRadius: "inherit",
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
        "& input": {
          padding: "0 $200",
          height: toRem(32),
          fontSize: "$T200",
          lineHeight: "$T200",
          letterSpacing: "$T200",
        },
      },
      400: {
        "& input": {
          padding: "0 $300",
          height: toRem(40),
          fontSize: "$T300",
          lineHeight: "$T300",
          letterSpacing: "$T300",
        },
      },
      500: {
        "& input": {
          padding: "0 $400",
          height: toRem(48),
          fontSize: "$T400",
          lineHeight: "$T400",
          letterSpacing: "$T400",
        },
      },
    },
  },
  defaultVariants: {
    variant: "Background",
    size: 400,
  },
});

type InputVariant = VariantProps<typeof StyledInput>;

const defaultElement = "div";
type InputProps<E extends ElementType = typeof defaultElement> = InputVariant &
  AsComponentProps<E> & {
    before?: ReactNode;
    after?: ReactNode;
    css?: CSS;
  };

export const Input = <E extends ElementType = typeof defaultElement>({
  as,
  className,
  variant,
  size,
  before,
  after,
  ...props
}: InputProps<E>) => (
  <StyledInput
    as={as}
    className={className}
    variant={variant}
    size={size}
    data-ui-before={before ? true : undefined}
    data-ui-after={after ? true : undefined}
  >
    {before}
    <input {...props} />
    {after}
  </StyledInput>
);
