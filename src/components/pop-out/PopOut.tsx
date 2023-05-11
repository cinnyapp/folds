import React, {
  MutableRefObject,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { config } from "../../theme";
import { as } from "../as";
import { Portal } from "../portal";
import { Align, getRelativeFixedPosition, Position, PositionCSS } from "../util";

export interface PopOutProps {
  open: boolean;
  position?: Position;
  align?: Align;
  offset?: number;
  alignOffset?: number;
  content: ReactNode;
  children: (anchorRef: MutableRefObject<null>) => ReactNode;
}
export const PopOut = as<"div", PopOutProps>(
  (
    {
      as: AsPopOut = "div",
      open,
      position = "bottom",
      align = "center",
      offset = 10,
      alignOffset = 0,
      content,
      children,
      style,
      ...props
    },
    ref
  ) => {
    const anchorRef = useRef<unknown>(null);
    const [popOutPosition, setPopOutPosition] = useState<PositionCSS>();

    const positionPopOut = useCallback(() => {
      const anchor = anchorRef.current as HTMLElement;

      const css = getRelativeFixedPosition(
        anchor.getBoundingClientRect(),
        position,
        align,
        offset,
        alignOffset
      );
      setPopOutPosition(css);
    }, [position, align, offset, alignOffset]);

    useEffect(() => {
      window.addEventListener("resize", positionPopOut);
      return () => {
        window.removeEventListener("resize", positionPopOut);
      };
    }, [positionPopOut]);

    useEffect(() => {
      if (open) positionPopOut();
    }, [open, positionPopOut]);

    return (
      <>
        {children(anchorRef as MutableRefObject<null>)}
        <Portal>
          {open && popOutPosition && (
            <AsPopOut
              style={{
                position: "fixed",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                zIndex: config.zIndex.Max,
                ...style,
              }}
              {...props}
              ref={ref}
            >
              <div
                style={{
                  display: "inline-block",
                  position: "fixed",
                  maxWidth: "100vw",
                  ...popOutPosition,
                }}
              >
                {content}
              </div>
            </AsPopOut>
          )}
        </Portal>
      </>
    );
  }
);
