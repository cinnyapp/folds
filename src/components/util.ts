export interface PositionCSS {
  top: string;
  right: string;
  bottom: string;
  left: string;
  transform: string;
}
export type Position = "Top" | "Right" | "Bottom" | "Left";
export type Align = "Start" | "Center" | "End";

export const getRelativeFixedPosition = (
  anchorRect: DOMRect,
  position: Position,
  align: Align,
  offset: number,
  alignOffset: number,
  itemRect: DOMRect
): PositionCSS => {
  const { clientWidth, clientHeight } = document.documentElement;

  const css = {
    top: "unset",
    right: "unset",
    bottom: "unset",
    left: "unset",
    transform: "none",
  };

  if (position === "Top" || position === "Bottom") {
    const top = anchorRect.top - offset;
    const bottom = anchorRect.bottom + offset;
    const canPositionTop = top >= itemRect.height;
    const canPositionBottom = bottom + itemRect.height <= clientHeight;

    if (position === "Top") {
      if (canPositionTop) css.bottom = `${clientHeight - top}px`;
      else if (canPositionBottom) css.top = `${bottom}px`;
      else css.top = `${offset}px`;
    }
    if (position === "Bottom") {
      if (canPositionBottom) css.top = `${bottom}px`;
      else if (canPositionTop) css.bottom = `${clientHeight - top}px`;
      else css.top = `${offset}px`;
    }

    if (align === "Start") css.left = `${anchorRect.left + alignOffset}px`;
    if (align === "Center") {
      css.left = `${anchorRect.left + anchorRect.width / 2 + alignOffset}px`;
      css.transform = "translateX(-50%)";
    }
    if (align === "End") css.right = `${clientWidth - anchorRect.right + alignOffset}px`;
  } else {
    const left = anchorRect.left - offset;
    const right = anchorRect.right + offset;
    const canPositionLeft = left >= itemRect.width;
    const canPositionRight = right + itemRect.width <= clientWidth;

    if (position === "Left") {
      if (canPositionLeft) css.right = `${clientWidth - left}px`;
      else if (canPositionRight) css.left = `${right}px`;
      else css.left = `${offset}px`;
    }
    if (position === "Right") {
      if (canPositionRight) css.left = `${right}px`;
      else if (canPositionLeft) css.right = `${clientWidth - left}px`;
      else css.left = `${offset}px`;
    }

    if (align === "Start") css.top = `${anchorRect.top + alignOffset}px`;
    if (align === "Center") {
      css.transform = "translateY(-50%)";
      css.top = `${anchorRect.top + anchorRect.height / 2 + alignOffset}px`;
    }
    if (align === "End") css.bottom = `${clientHeight - anchorRect.bottom + alignOffset}px`;
  }

  return css;
};

export const percent = (min: number, max: number, value: number) =>
  ((value - min) / (max - min)) * 100;
