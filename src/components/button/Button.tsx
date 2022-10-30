import React, { ElementType, ReactNode } from "react";
import { CSS, styled, toRem, VariantProps } from "../../config";
import { AsComponentProps, MainColor } from "../types";

const getVariant = (variant: MainColor): CSS => ({
  $$ButtonVariant: `$colors$${variant}`,
  $$ButtonVariantHover: `$colors$${variant}Hover`,
  $$ButtonVariantActive: `$colors$${variant}Active`,
  $$ButtonVariantLine: `$colors$${variant}Line`,
  $$ButtonOnVariant: `$colors$On${variant}`,

  $$ButtonVariantContainer: `$colors$${variant}Container`,
  $$ButtonVariantContainerHover: `$colors$${variant}ContainerHover`,
  $$ButtonVariantContainerActive: `$colors$${variant}ContainerActive`,
  $$ButtonVariantContainerLine: `$colors$${variant}ContainerLine`,
  $$ButtonOnVariantContainer: `$colors$On${variant}Container`,
});

export const StyledButton = styled("button", {
  margin: 0,
  padding: 0,
  appearance: "none",
  WebkitTapHighlightColor: "transparent",
  border: "0 solid currentColor",
  boxShadow: "none",

  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "$400",
  cursor: "pointer",

  "&[aria-pressed=true]": {
    backgroundColor: `$$ButtonActiveColor`,
  },

  "@hover": {
    "&:hover": {
      backgroundColor: `$$ButtonHoverColor`,
    },
  },
  "&:focus-visible": {
    backgroundColor: `$$ButtonHoverColor`,
    outline: "$FocusRing",
  },
  "&:active": {
    backgroundColor: `$$ButtonActiveColor`,
  },

  "&[disabled], &[aria-disabled=true]": {
    opacity: "$Disabled",
    cursor: "not-allowed",
  },

  variants: {
    size: {
      300: {
        height: toRem(32),
        gap: "$100",
        padding: "0 $300",
        "&[data-ui-before=true]": {
          paddingLeft: "$200",
        },
        "&[data-ui-after=true]": {
          paddingRight: "$200",
        },
      },
      400: {
        height: toRem(40),
        gap: "$200",
        padding: "0 $400",
        "&[data-ui-before=true]": {
          paddingLeft: "$300",
        },
        "&[data-ui-after=true]": {
          paddingRight: "$300",
        },
      },
      500: {
        height: toRem(48),
        gap: "$300",
        padding: "0 $500",
        "&[data-ui-before=true]": {
          paddingLeft: "$400",
        },
        "&[data-ui-after=true]": {
          paddingRight: "$400",
        },
      },
    },
    variant: {
      Primary: getVariant("Primary"),
      Secondary: getVariant("Secondary"),
      Success: getVariant("Success"),
      Warning: getVariant("Warning"),
      Critical: getVariant("Critical"),
    },
    fill: {
      Solid: {
        backgroundColor: "$$ButtonVariant",
        color: "$$ButtonOnVariant",
        borderColor: "$$ButtonVariantLine",
        $$ButtonHoverColor: "$$ButtonVariantHover",
        $$ButtonActiveColor: "$$ButtonVariantActive",
      },
      Soft: {
        backgroundColor: "$$ButtonVariantContainer",
        color: "$$ButtonOnVariantContainer",
        borderColor: "$$ButtonVariantContainerLine",
        $$ButtonHoverColor: "$$ButtonVariantContainerHover",
        $$ButtonActiveColor: "$$ButtonVariantContainerActive",
      },
      None: {
        backgroundColor: "inherit",
        color: "$$ButtonVariant",
        borderColor: "$$ButtonVariant",
        $$ButtonHoverColor: "$$ButtonVariantContainerHover",
        $$ButtonActiveColor: "$$ButtonVariantContainerActive",
      },
    },
    outlined: {
      true: {
        borderWidth: "$400",
      },
    },
  },
  defaultVariants: {
    size: 400,
    variant: "Primary",
    fill: "Solid",
  },
});

type ButtonVariant = VariantProps<typeof StyledButton>;

const defaultElement = "button";
type ButtonProps<E extends ElementType = typeof defaultElement> = ButtonVariant &
  AsComponentProps<E> & {
    before?: ReactNode;
    after?: ReactNode;
    css?: CSS;
  };

export const Button = <E extends ElementType = typeof defaultElement>({
  before,
  after,
  children,
  ...props
}: ButtonProps<E>) => (
  <StyledButton
    data-ui-before={before ? true : undefined}
    data-ui-after={after ? true : undefined}
    {...props}
  >
    {before}
    {children}
    {after}
  </StyledButton>
);
