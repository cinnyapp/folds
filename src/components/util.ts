export interface PositionCSS {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
}
export type Position = "Top" | "Right" | "Bottom" | "Left";
export type Align = "Start" | "Center" | "End";

export type RectCords = {
  x: number;
  y: number;
  width: number;
  height: number;
};

const canAlignXStart = (anchor: RectCords, target: RectCords, offset: number): boolean =>
  anchor.x + offset + target.width <= document.documentElement.clientWidth;
const canAlignXCenter = (anchor: RectCords, target: RectCords, offset: number): boolean => {
  const xCenter = anchor.x + anchor.width / 2;
  const left = xCenter - target.width / 2;
  if (left < 0) return false;

  return left + offset + target.width <= document.documentElement.clientWidth;
};
const canAlignXEnd = (anchor: RectCords, target: RectCords, offset: number): boolean => {
  const xEnd = anchor.x + anchor.width;
  return xEnd - (target.width + offset) >= 0;
};
const canAlignYStart = (anchor: RectCords, target: RectCords, offset: number): boolean =>
  anchor.y + offset + target.height <= document.documentElement.clientHeight;
const canAlignYCenter = (anchor: RectCords, target: RectCords, offset: number): boolean => {
  const yCenter = anchor.y + anchor.height / 2;
  const top = yCenter - target.height / 2;
  if (top < 0) return false;

  return top + offset + target.height <= document.documentElement.clientHeight;
};
const canAlignYEnd = (anchor: RectCords, target: RectCords, offset: number): boolean => {
  const yEnd = anchor.y + anchor.height;

  return yEnd - (target.height + offset) >= 0;
};

const alignXStart = (anchor: RectCords, offset: number): PositionCSS => ({
  left: `${anchor.x + offset}px`,
});
const alignXCenter = (anchor: RectCords, target: RectCords, offset: number): PositionCSS => {
  const xCenter = anchor.x + anchor.width / 2;
  const left = xCenter - target.width / 2;

  return {
    left: `${left + offset}px`,
  };
};
const alignXEnd = (anchor: RectCords, offset: number): PositionCSS => {
  const xEnd = anchor.x + anchor.width;
  const right = document.documentElement.clientWidth - xEnd;

  return {
    right: `${right + offset}px`,
  };
};
const alignXAuto = (
  anchor: RectCords,
  target: RectCords,
  offset: number
): PositionCSS | undefined => {
  if (canAlignXCenter(anchor, target, offset)) {
    return alignXCenter(anchor, target, offset);
  }
  if (canAlignXStart(anchor, target, offset)) {
    return alignXStart(anchor, offset);
  }
  if (canAlignXEnd(anchor, target, offset)) {
    return alignXEnd(anchor, offset);
  }
  return undefined;
};
const alignX = (
  align: Align,
  anchor: RectCords,
  target: RectCords,
  offset: number
): PositionCSS | undefined => {
  if (align === "Start" && canAlignXStart(anchor, target, offset)) {
    return alignXStart(anchor, offset);
  }
  if (align === "Center" && canAlignXCenter(anchor, target, offset)) {
    return alignXCenter(anchor, target, offset);
  }
  if (align === "End" && canAlignXEnd(anchor, target, offset)) {
    return alignXEnd(anchor, offset);
  }
  return alignXAuto(anchor, target, offset);
};

const alignYStart = (anchor: RectCords, offset: number): PositionCSS => ({
  top: `${anchor.y + offset}px`,
});
const alignYCenter = (anchor: RectCords, target: RectCords, offset: number): PositionCSS => {
  const yCenter = anchor.y + anchor.height / 2;
  const top = yCenter - target.height / 2;

  return {
    top: `${top + offset}px`,
  };
};
const alignYEnd = (anchor: RectCords, offset: number): PositionCSS => {
  const yEnd = anchor.y + anchor.height;
  const bottom = document.documentElement.clientHeight - yEnd;

  return {
    bottom: `${bottom + offset}px`,
  };
};
const alignYAuto = (
  anchor: RectCords,
  target: RectCords,
  offset: number
): PositionCSS | undefined => {
  if (canAlignYCenter(anchor, target, offset)) {
    return alignYCenter(anchor, target, offset);
  }
  if (canAlignYStart(anchor, target, offset)) {
    return alignYStart(anchor, offset);
  }
  if (canAlignYEnd(anchor, target, offset)) {
    return alignYEnd(anchor, offset);
  }
  return undefined;
};
const alignY = (
  align: Align,
  anchor: RectCords,
  target: RectCords,
  offset: number
): PositionCSS | undefined => {
  if (align === "Start" && canAlignYStart(anchor, target, offset)) {
    return alignYStart(anchor, offset);
  }
  if (align === "Center" && canAlignYCenter(anchor, target, offset)) {
    return alignYCenter(anchor, target, offset);
  }
  if (align === "End" && canAlignYEnd(anchor, target, offset)) {
    return alignYEnd(anchor, offset);
  }
  return alignYAuto(anchor, target, offset);
};

const canPositionTop = (anchor: RectCords, target: RectCords, offset: number): boolean =>
  target.height + offset <= anchor.y;
const canPositionRight = (anchor: RectCords, target: RectCords, offset: number): boolean =>
  anchor.x + anchor.width + offset + target.width <= document.documentElement.clientWidth;
const canPositionBottom = (anchor: RectCords, target: RectCords, offset: number): boolean =>
  anchor.y + anchor.height + offset + target.height <= document.documentElement.clientHeight;
const canPositionLeft = (anchor: RectCords, target: RectCords, offset: number): boolean =>
  target.width + offset <= anchor.x;

const positionTop = (anchor: RectCords, offset: number): PositionCSS => {
  const bottom = document.documentElement.clientHeight - anchor.y;
  return {
    bottom: `${bottom + offset}px`,
  };
};

const positionRight = (anchor: RectCords, offset: number): PositionCSS => {
  const left = anchor.x + anchor.width;
  return {
    left: `${left + offset}px`,
  };
};
const positionBottom = (anchor: RectCords, offset: number): PositionCSS => {
  const top = anchor.y + anchor.height;
  return {
    top: `${top + offset}px`,
  };
};
const positionLeft = (anchor: RectCords, offset: number): PositionCSS => {
  const right = document.documentElement.clientWidth - anchor.x;
  return {
    right: `${right + offset}px`,
  };
};
const positionAuto = (
  align: Align,
  anchor: RectCords,
  target: RectCords,
  offset: number,
  alignOffset: number
): PositionCSS => {
  if (canPositionRight(anchor, target, offset)) {
    return {
      ...positionRight(anchor, offset),
      ...alignY(align, anchor, target, alignOffset),
    };
  }
  if (canPositionBottom(anchor, target, offset)) {
    return {
      ...positionBottom(anchor, offset),
      ...alignX(align, anchor, target, alignOffset),
    };
  }
  if (canPositionLeft(anchor, target, offset)) {
    return {
      ...positionLeft(anchor, offset),
      ...alignY(align, anchor, target, alignOffset),
    };
  }
  if (canPositionTop(anchor, target, offset)) {
    return {
      ...positionTop(anchor, offset),
      ...alignX(align, anchor, target, alignOffset),
    };
  }
  return {
    ...alignX(align, anchor, target, alignOffset),
  };
};

export const getRelativeFixedPosition = (
  anchor: RectCords,
  target: RectCords,
  position: Position,
  align: Align,
  offset: number,
  alignOffset: number
): PositionCSS => {
  if (position === "Top" && canPositionTop(anchor, target, offset)) {
    return {
      ...positionTop(anchor, offset),
      ...alignX(align, anchor, target, alignOffset),
    };
  }
  if (position === "Right" && canPositionRight(anchor, target, offset)) {
    return {
      ...positionRight(anchor, offset),
      ...alignY(align, anchor, target, alignOffset),
    };
  }
  if (position === "Bottom" && canPositionBottom(anchor, target, offset)) {
    return {
      ...positionBottom(anchor, offset),
      ...alignX(align, anchor, target, alignOffset),
    };
  }

  if (position === "Left" && canPositionLeft(anchor, target, offset)) {
    return {
      ...positionLeft(anchor, offset),
      ...alignY(align, anchor, target, alignOffset),
    };
  }

  return positionAuto(align, anchor, target, offset, alignOffset);
};

export const percent = (min: number, max: number, value: number) =>
  ((value - min) / (max - min)) * 100;
