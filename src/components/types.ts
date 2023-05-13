import { ComponentPropsWithRef, ElementType, PropsWithChildren } from "react";

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

export type ComponentProps<E extends ElementType> = PropsWithChildren<ComponentPropsWithRef<E>>;
