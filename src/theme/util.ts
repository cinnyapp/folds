export const pxToRem = (px: number) => parseFloat((px / 16).toFixed(4));
export const toRem = (px: number) => `${pxToRem(px)}rem`;
