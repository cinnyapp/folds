export interface PositionCSS {
  top: string;
  right: string;
  bottom: string;
  left: string;
  transform: string;
}
export type Position = "top" | "right" | "bottom" | "left";
export type Align = "start" | "center" | "end";

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

  if (position === "top" || position === "bottom") {
    if (position === "top") css.bottom = `${clientHeight - domRect.top + offset}px`;
    else css.top = `${domRect.bottom + offset}px`;

    if (align === "start") css.left = `${domRect.left + alignOffset}px`;
    if (align === "center") {
      css.left = `${domRect.left + domRect.width / 2 + alignOffset}px`;
      css.transform = "translateX(-50%)";
    }
    if (align === "end") css.right = `${clientWidth - domRect.right + alignOffset}px`;
  } else {
    if (position === "right") css.left = `${domRect.right + offset}px`;
    else css.right = `${clientWidth - domRect.left + offset}px`;

    if (align === "start") css.top = `${domRect.top + alignOffset}px`;
    if (align === "center") {
      css.transform = "translateY(-50%)";
      css.top = `${domRect.top + domRect.height / 2 + alignOffset}px`;
    }
    if (align === "end") css.bottom = `${clientHeight - domRect.bottom + alignOffset}px`;
  }

  return css;
};
