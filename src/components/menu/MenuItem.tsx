import React, { ElementType, forwardRef, ReactElement, ReactNode } from "react";
import { CSS, styled, toRem, VariantProps } from "../../config";
import { AsComponentProps, ContainerColor, RefOfType } from "../types";

const getVariant = (variant: ContainerColor): CSS => ({
  backgroundColor: `$${variant}Container`,
  color: `$On${variant}Container`,

  "@hover": {
    "&:hover": {
      backgroundColor: `$${variant}ContainerHover`,
    },
  },
  "&:focus-visible": {
    backgroundColor: `$${variant}ContainerHover`,
    outline: "$FocusRing",
  },
  "&:active": {
    backgroundColor: `$${variant}ContainerActive`,
  },
});

const StyledMenuItem = styled("button", {
  margin: 0,
  appearance: "none",
  WebkitTapHighlightColor: "transparent",
  border: "0 solid currentColor",
  boxShadow: "none",

  height: toRem(40),
  padding: "0 $400",
  display: "flex",
  alignItems: "center",
  justifyContent: "start",
  gap: "$200",
  cursor: "pointer",

  "&[data-ui-before=true]": {
    paddingLeft: "$300",
  },
  "&[data-ui-after=true]": {
    paddingRight: "$300",
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
  },
  defaultVariants: {
    variant: "Surface",
  },
});

const defaultElement = "button";
type MenuItemVariant = VariantProps<typeof StyledMenuItem>;

type MenuItemProps<E extends ElementType = typeof defaultElement> = MenuItemVariant &
  AsComponentProps<E> & {
    before?: ReactNode;
    after?: ReactNode;
    css?: CSS;
  };

export const MenuItem: <E extends ElementType = typeof defaultElement>(
  props: MenuItemProps<E>
) => ReactElement | null = forwardRef(
  <E extends ElementType = typeof defaultElement>(
    { before, after, children, ...props }: MenuItemProps<E>,
    ref: RefOfType<E>
  ) => (
    <StyledMenuItem
      data-ui-before={before ? true : undefined}
      data-ui-after={after ? true : undefined}
      {...props}
      ref={ref}
    >
      {before}
      {children}
      {after}
    </StyledMenuItem>
  )
);
