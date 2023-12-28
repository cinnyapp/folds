import {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ElementType,
  PropsWithChildren,
} from "react";

export type MainColor = "Primary" | "Secondary" | "Success" | "Warning" | "Critical";

export type ContainerColor =
  | "Background"
  | "Surface"
  | "SurfaceVariant"
  | "Primary"
  | "Secondary"
  | "Success"
  | "Warning"
  | "Critical";

export type RefOfType<E extends ElementType> = ComponentPropsWithRef<E>["ref"];

export type AsProp<E extends ElementType> = {
  as?: E;
};

export type AsInProps<E extends ElementType, ExtraProps = object> = Omit<
  PropsWithChildren<ComponentPropsWithoutRef<E>>,
  keyof ExtraProps | keyof AsProp<ElementType>
> &
  ExtraProps &
  AsProp<E>;

export type AsOutProps<E extends ElementType, ExtraProps = object> = Omit<
  PropsWithChildren<ComponentPropsWithRef<E>>,
  keyof ExtraProps | keyof AsProp<ElementType>
> &
  ExtraProps &
  AsProp<E>;
