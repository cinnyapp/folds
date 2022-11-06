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
  element: HTMLElement,
  position: Position,
  align: Align,
  offset: number
): PositionCSS => {
  const cords = element.getBoundingClientRect();
  const { clientWidth, clientHeight } = document.body;

  const css = {
    top: "unset",
    right: "unset",
    bottom: "unset",
    left: "unset",
    transform: "none",
  };

  if (position === "top" || position === "bottom") {
    if (position === "top") css.bottom = `${clientHeight - cords.top + offset}px`;
    else css.top = `${cords.bottom + offset}px`;

    if (align === "start") css.left = `${cords.left}px`;
    if (align === "center") {
      css.left = `${cords.left + cords.width / 2}px`;
      css.transform = "translateX(-50%)";
    }
    if (align === "end") css.right = `${clientWidth - cords.right}px`;
  } else {
    if (position === "right") css.left = `${cords.right + offset}px`;
    else css.right = `${clientWidth - cords.left + offset}px`;

    if (align === "start") css.top = `${cords.top}px`;
    if (align === "center") {
      css.transform = "translateY(-50%)";
      css.top = `${cords.top + cords.height / 2}px`;
    }
    if (align === "end") css.bottom = `${clientHeight - cords.bottom}px`;
  }

  return css;
};
