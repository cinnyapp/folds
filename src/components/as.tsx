import { ElementType, forwardRef, ReactElement } from "react";
import { AsComponentProps, RefOfType } from "./types";

export const as = <T extends ElementType, ExtraProps = Record<string, unknown>>(
  fc: (props: AsComponentProps<T> & ExtraProps, ref: RefOfType<T>) => ReactElement
) =>
  forwardRef(fc) as unknown as <E extends ElementType = T>(
    props: AsComponentProps<E> & ExtraProps
  ) => ReactElement;
