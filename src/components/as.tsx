import { ElementType, forwardRef, ReactElement } from "react";
import { AsComponentProps, RefOfType } from "./types";

export const as = <T extends ElementType, ExtraProps = Record<string, unknown>>(
  fc: <E extends ElementType = T>(
    props: AsComponentProps<E> & ExtraProps,
    ref: RefOfType<E>
  ) => ReactElement
) =>
  forwardRef(fc) as unknown as <E extends ElementType = T>(
    props: AsComponentProps<E> & ExtraProps
  ) => ReactElement;
