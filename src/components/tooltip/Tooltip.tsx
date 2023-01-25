import classNames from "classnames";
import React, { MutableRefObject, ReactNode, useEffect, useRef, useState } from "react";
import { as } from "../as";
import { Portal } from "../portal";
import { Align, getRelativeFixedPosition, Position } from "../util";
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

const useTooltip = (position: Position, align: Align, offset: number, delay: number) => {
  const triggerRef = useRef<unknown>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const trigger = triggerRef.current as HTMLElement;
    const tooltip = tooltipRef.current;
    let timeoutId: number;

    const openTooltip = (evt: Event) => {
      const pos = getRelativeFixedPosition(trigger, position, align, offset);
      if (tooltip) {
        tooltip.style.top = pos.top;
        tooltip.style.right = pos.right;
        tooltip.style.bottom = pos.bottom;
        tooltip.style.left = pos.left;
        tooltip.style.transform = pos.transform;
      }
      if (evt.type === "focus") setOpen(true);
      else timeoutId = window.setTimeout(() => setOpen(true), delay);
    };
    const closeTooltip = () => {
      clearTimeout(timeoutId);
      setOpen(false);
    };

    const onKeyDown = (evt: KeyboardEvent) => {
      if (
        evt.key === "Escape" &&
        document.activeElement === trigger &&
        tooltip &&
        tooltip.children.length > 0
      ) {
        evt.preventDefault();
        clearTimeout(timeoutId);
        setOpen(false);
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
  }, [position, align, offset, delay]);

  return {
    open,
    triggerRef,
    tooltipRef,
  };
};

interface TooltipProviderProps {
  position?: Position;
  align?: Align;
  offset?: number;
  delay?: number;
  tooltip: ReactNode;
  children: (triggerRef: MutableRefObject<null>) => ReactNode;
}
export const TooltipProvider = ({
  position = "top",
  align = "center",
  offset = 10,
  delay = 200,
  tooltip,
  children,
}: TooltipProviderProps) => {
  const { open, tooltipRef, triggerRef } = useTooltip(position, align, offset, delay);

  return (
    <>
      {children(triggerRef as MutableRefObject<null>)}
      <Portal>
        <div
          role="tooltip"
          ref={tooltipRef}
          style={{
            display: "inline-block",
            position: "fixed",
            maxWidth: "100vw",
            zIndex: "$Max",
            pointerEvents: "none",
          }}
        >
          {open && tooltip}
        </div>
      </Portal>
    </>
  );
};
