import React, {
  MutableRefObject,
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { CSS, keyframes, styled, toRem } from "../../config";
import { Box } from "../box";
import { Portal } from "../portal";
import { ContainerColor } from "../types";
import { Align, getRelativeFixedPosition, Position } from "../util";

const getVariant = (variant: ContainerColor): CSS => ({
  backgroundColor: `$${variant}Container`,
  color: `$On${variant}Container`,
});

const TooltipScaleAnime = keyframes({
  "0%": {
    transform: "translateY(4px)",
  },
  "100%": {
    transform: "translateY(0)",
  },
});

export const Tooltip = styled("div", {
  margin: 0,
  padding: `${toRem(6)} $300`,
  boxShadow: "$E200",
  borderRadius: "$400",
  display: "inline-flex",
  alignItems: "center",
  animation: `${TooltipScaleAnime} 200ms`,

  variants: {
    variant: {
      Background: getVariant("Background"),
      Surface: getVariant("Surface"),
      SurfaceVariant: getVariant("SurfaceVariant"),
      Primary: getVariant("Primary"),
      Secondary: getVariant("Secondary"),
      Success: getVariant("Success"),
      Warning: getVariant("Warning"),
      Critical: getVariant("Critical"),
    },
  },
  defaultVariants: {
    variant: "Surface",
  },
});

export const useTooltip = (position: Position, align: Align, offset: number) => {
  const triggerRef = useRef<unknown>(null);
  const toolTipRef = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const trigger = triggerRef.current as HTMLElement;
    const tooltip = toolTipRef.current;

    const openTooltip = () => {
      const css = getRelativeFixedPosition(trigger, position, align, offset);
      if (tooltip) {
        tooltip.style.top = css.top;
        tooltip.style.right = css.right;
        tooltip.style.bottom = css.bottom;
        tooltip.style.left = css.left;
        tooltip.style.transform = css.transform;
      }
      setOpen(true);
    };
    const closeTooltip = () => {
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
        setOpen(false);
      }
    };

    trigger?.addEventListener("mouseenter", openTooltip);
    trigger?.addEventListener("mouseleave", closeTooltip);
    trigger?.addEventListener("focus", openTooltip);
    trigger?.addEventListener("blur", closeTooltip);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      trigger?.removeEventListener("mouseenter", openTooltip);
      trigger?.removeEventListener("mouseleave", closeTooltip);
      trigger?.removeEventListener("focus", openTooltip);
      trigger?.removeEventListener("blur", closeTooltip);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [position, align, offset]);

  return {
    open,
    triggerRef,
    toolTipRef,
  };
};

interface TooltipProviderProps {
  position?: Position;
  align?: Align;
  offset?: number;
  tooltip: ReactNode;
  children: (ref: MutableRefObject<null>) => ReactElement;
}
export const TooltipProvider = ({
  position = "top",
  align = "center",
  offset = 10,
  tooltip,
  children,
}: TooltipProviderProps) => {
  const { open, toolTipRef, triggerRef } = useTooltip(position, align, offset);

  return (
    <>
      {children(triggerRef as MutableRefObject<null>)}
      <Portal>
        <Box
          role="tooltip"
          ref={toolTipRef}
          css={{
            display: "inline-block",
            position: "fixed",
            maxWidth: "100vw",
            zIndex: "$Max",
            pointerEvents: "none",
          }}
        >
          {open && tooltip}
        </Box>
      </Portal>
    </>
  );
};
