import classNames from "classnames";
import React, {
  createContext,
  MutableRefObject,
  ReactNode,
  RefCallback,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { as } from "../as";
import { Portal } from "../portal";
import { Align, getRelativeFixedPosition, Position } from "../util";
import * as css from "./Tooltip.css";

export const TooltipContainerContext = createContext<Element | DocumentFragment | undefined>(
  undefined
);
export const TooltipContainerProvider = TooltipContainerContext.Provider;
export const useTooltipContainer = (): Element | DocumentFragment | undefined => {
  const container = useContext(TooltipContainerContext);

  return container;
};

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
  const triggerRef = useRef<HTMLElement | SVGElement | null>(null);
  const baseRef = useRef<HTMLElement | SVGElement | null>(null);
  const [open, setOpen] = useState(false);

  const positionTooltip = useCallback(() => {
    const anchor = triggerRef.current;
    const baseEl = baseRef.current;
    if (!anchor) return;
    if (!baseEl) return;

    const tooltipCss = getRelativeFixedPosition(
      anchor.getBoundingClientRect(),
      baseEl.getBoundingClientRect(),
      position,
      align,
      offset,
      alignOffset
    );
    baseEl.style.top = tooltipCss.top ?? "unset";
    baseEl.style.bottom = tooltipCss.bottom ?? "unset";
    baseEl.style.left = tooltipCss.left ?? "unset";
    baseEl.style.right = tooltipCss.right ?? "unset";
  }, [position, align, offset, alignOffset]);

  useEffect(() => {
    const trigger = triggerRef.current;
    let timeoutId: number | undefined;

    const openTooltip = (evt: Event) => {
      if (timeoutId) return;

      if (evt.type === "focus") setOpen(true);
      else timeoutId = window.setTimeout(() => setOpen(true), delay);
    };

    const closeTooltip = () => {
      clearTimeout(timeoutId);
      timeoutId = undefined;
      setOpen(false);
    };

    const onKeyDown = (evt: KeyboardEvent) => {
      if (evt.key === "Escape" && document.activeElement === trigger) {
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
  }, [position, align, offset, alignOffset, delay]);

  useLayoutEffect(() => {
    if (open) positionTooltip();
  }, [open, positionTooltip]);

  const handleTriggerRef: RefCallback<HTMLElement | SVGElement> = useCallback((element) => {
    triggerRef.current = element;
  }, []);
  const handleBaseRef: RefCallback<HTMLElement | SVGElement> = useCallback((element) => {
    baseRef.current = element;
  }, []);

  return {
    triggerRef: handleTriggerRef,
    baseRef: handleBaseRef,
    open,
  };
};

interface TooltipProviderProps {
  position?: Position;
  align?: Align;
  offset?: number;
  alignOffset?: number;
  delay?: number;
  tooltip: ReactNode;
  children: (triggerRef: RefCallback<HTMLElement | SVGElement>) => ReactNode;
  container?: Element | DocumentFragment;
}
export const TooltipProvider = as<"div", TooltipProviderProps>(
  (
    {
      as: AsTooltipProvider = "div",
      className,
      position = "Top",
      align = "Center",
      offset = 10,
      alignOffset = 0,
      delay = 200,
      tooltip,
      children,
      container,
      ...props
    },
    ref
  ) => {
    const contextContainer = useTooltipContainer();
    const { open, triggerRef, baseRef } = useTooltip(position, align, offset, alignOffset, delay);

    return (
      <>
        {children(triggerRef)}
        {open && (
          <Portal container={container ?? contextContainer}>
            <AsTooltipProvider
              role="tooltip"
              className={classNames(css.TooltipProvider, className)}
              {...props}
              ref={(instance) => {
                baseRef(instance);
                if (ref) {
                  if (typeof ref === "function") ref(instance);
                  // eslint-disable-next-line no-param-reassign
                  else (ref as MutableRefObject<typeof instance>).current = instance;
                }
              }}
            >
              {tooltip}
            </AsTooltipProvider>
          </Portal>
        )}
      </>
    );
  }
);
