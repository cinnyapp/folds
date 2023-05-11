import { ElementType, forwardRef, ReactElement } from "react";
import { AsComponentProps, RefOfType } from "./types";

export const as = <T extends ElementType, ExtraProps = unknown>(
  fc: (
    props: Omit<AsComponentProps<T>, keyof ExtraProps> & ExtraProps,
    ref: RefOfType<T>
  ) => ReactElement
) =>
  forwardRef(fc) as unknown as <E extends ElementType>(
    props: Omit<AsComponentProps<E>, keyof ExtraProps> & ExtraProps
  ) => ReactElement;
