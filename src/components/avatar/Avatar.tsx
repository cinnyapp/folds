import { styled, toRem } from "../../config";

export const Avatar = styled("span", {
  padding: 0,
  margin: 0,
  appearance: "none",
  WebkitTapHighlightColor: "transparent",
  border: "none",
  boxShadow: "none",
  userSelect: "none",

  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  width: "$$AvatarSize",
  height: "$$AvatarSize",
  borderRadius: "$400",
  overflow: "hidden",
  position: "relative",

  "&:focus-visible": {
    outline: "$FocusRing",
  },

  "&[disabled], &[aria-disabled=true]": {
    opacity: "$Disabled",
    cursor: "not-allowed",
  },

  variants: {
    size: {
      200: {
        $$AvatarSize: toRem(24),
      },
      300: {
        $$AvatarSize: toRem(36),
      },
      400: {
        $$AvatarSize: toRem(42),
      },
      500: {
        $$AvatarSize: toRem(58),
      },
    },
  },
  defaultVariants: {
    size: 400,
  },
});

export const AvatarImage = styled("img", {
  objectFit: "cover",
  width: "100%",
  height: "100%",
  borderRadius: "inherit",
  position: "absolute",
});

export const AvatarFallback = styled("span", {
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
  borderRadius: "inherit",
  position: "absolute",
});
