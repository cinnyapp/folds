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

type AsProp<E extends ElementType> = {
  as?: E;
};

export type AsComponentProps<E extends ElementType> = PropsWithChildren<
  ComponentPropsWithRef<E> & AsProp<E>
>;
