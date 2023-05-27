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
  domRect: DOMRect,
  position: Position,
  align: Align,
  offset: number,
  alignOffset: number
): PositionCSS => {
  const { clientWidth, clientHeight } = document.body;

  const css = {
    top: "unset",
    right: "unset",
    bottom: "unset",
    left: "unset",
    transform: "none",
  };

  if (position === "Top" || position === "Bottom") {
    if (position === "Top") css.bottom = `${clientHeight - domRect.top + offset}px`;
    else css.top = `${domRect.bottom + offset}px`;

    if (align === "Start") css.left = `${domRect.left + alignOffset}px`;
    if (align === "Center") {
      css.left = `${domRect.left + domRect.width / 2 + alignOffset}px`;
      css.transform = "translateX(-50%)";
    }
    if (align === "End") css.right = `${clientWidth - domRect.right + alignOffset}px`;
  } else {
    if (position === "Right") css.left = `${domRect.right + offset}px`;
    else css.right = `${clientWidth - domRect.left + offset}px`;

    if (align === "Start") css.top = `${domRect.top + alignOffset}px`;
    if (align === "Center") {
      css.transform = "translateY(-50%)";
      css.top = `${domRect.top + domRect.height / 2 + alignOffset}px`;
    }
    if (align === "End") css.bottom = `${clientHeight - domRect.bottom + alignOffset}px`;
  }

  return css;
};

export const percent = (min: number, max: number, value: number) =>
  ((value - min) / (max - min)) * 100;
