import { ElementType, forwardRef, ReactElement } from "react";
import { AsInProps, AsOutProps, RefOfType } from "./types";

export const as = <DefaultType extends ElementType, ExtraProps = object>(
  fc: (
    props: AsInProps<DefaultType, ExtraProps>,
    ref: RefOfType<DefaultType>
  ) => ReactElement | null
) =>
  forwardRef(fc) as unknown as <T extends ElementType = DefaultType>(
    props: AsOutProps<T, ExtraProps>
  ) => ReturnType<typeof fc>;
