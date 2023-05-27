import classNames from "classnames";
import React, { MutableRefObject, ReactNode, useEffect, useRef, useState } from "react";
import { config } from "../../theme";
import { as } from "../as";
import { Portal } from "../portal";
import { Align, getRelativeFixedPosition, Position, PositionCSS } from "../util";
import * as css from "./Tooltip.css";

export const Tooltip = as<"div", css.TooltipVariants>(
  ({ as: AsTooltip = "div", className, variant, radii, ...props }, ref) => (
    <AsTooltip
      className={classNames(css.Tooltip({ variant, radii }), className)}
      {...props}
      ref={ref}
    />
  )
);

const useTooltip = (
  position: Position,
  align: Align,
  offset: number,
  alignOffset: number,
  delay: number
) => {
  const triggerRef = useRef<unknown>(null);
  const [tooltipPosition, setTooltipPosition] = useState<PositionCSS>();

  useEffect(() => {
    const trigger = triggerRef.current as HTMLElement;
    let timeoutId: number | undefined;

    const openTooltip = (evt: Event) => {
      if (timeoutId) return;
      const pos = getRelativeFixedPosition(
        trigger.getBoundingClientRect(),
        position,
        align,
        offset,
        alignOffset
      );

      if (evt.type === "focus") setTooltipPosition(pos);
      else timeoutId = window.setTimeout(() => setTooltipPosition(pos), delay);
    };
    const closeTooltip = () => {
      clearTimeout(timeoutId);
      timeoutId = undefined;
      setTooltipPosition(undefined);
    };

    const onKeyDown = (evt: KeyboardEvent) => {
      if (evt.key === "Escape" && document.activeElement === trigger) {
        evt.preventDefault();
        clearTimeout(timeoutId);
        setTooltipPosition(undefined);
      }
    };

    trigger?.addEventListener("mouseenter", openTooltip);
    trigger?.addEventListener("mouseleave", closeTooltip);
    trigger?.addEventListener("focus", openTooltip);
    trigger?.addEventListener("blur", closeTooltip);
    document.addEventListener("keydown", onKeyDown);
    trigger?.addEventListener("click", closeTooltip);
    return () => {
      clearTimeout(timeoutId);
      trigger?.removeEventListener("mouseenter", openTooltip);
      trigger?.removeEventListener("mouseleave", closeTooltip);
      trigger?.removeEventListener("focus", openTooltip);
      trigger?.removeEventListener("blur", closeTooltip);
      document.removeEventListener("keydown", onKeyDown);
      trigger?.removeEventListener("click", closeTooltip);
    };
  }, [position, align, offset, alignOffset, delay]);

  return {
    tooltipPosition,
    triggerRef,
  };
};

interface TooltipProviderProps {
  position?: Position;
  align?: Align;
  offset?: number;
  alignOffset?: number;
  delay?: number;
  tooltip: ReactNode;
  children: (triggerRef: MutableRefObject<null>) => ReactNode;
}
export const TooltipProvider = as<"div", TooltipProviderProps>(
  (
    {
      as: AsTooltipProvider = "div",
      position = "Top",
      align = "Center",
      offset = 10,
      alignOffset = 0,
      delay = 200,
      tooltip,
      children,
      style,
      ...props
    },
    ref
  ) => {
    const { tooltipPosition, triggerRef } = useTooltip(position, align, offset, alignOffset, delay);

    return (
      <>
        {children(triggerRef as MutableRefObject<null>)}
        {tooltipPosition && (
          <Portal>
            <AsTooltipProvider
              role="tooltip"
              style={{
                display: "inline-block",
                position: "fixed",
                maxWidth: "100vw",
                zIndex: config.zIndex.Max,
                pointerEvents: "none",
                ...tooltipPosition,
                ...style,
              }}
              {...props}
              ref={ref}
            >
              {tooltip}
            </AsTooltipProvider>
          </Portal>
        )}
      </>
    );
  }
);
