import { ElementType, forwardRef, ReactElement } from "react";
import { ComponentProps, AsProp, RefOfType } from "./types";

export const as = <T extends ElementType, ExtraProps = unknown>(
  fc: (
    props: Omit<ComponentProps<T>, keyof ExtraProps | keyof AsProp<T>> & AsProp<T> & ExtraProps,
    ref: RefOfType<T>
  ) => ReactElement
) =>
  forwardRef(fc) as unknown as <E extends ElementType = T>(
    props: Omit<ComponentProps<E>, keyof ExtraProps | keyof AsProp<E>> & AsProp<E> & ExtraProps
  ) => ReactElement;
