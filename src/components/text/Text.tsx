import { styled } from "../../config";

export const Text = styled("p", {
  margin: 0,
  padding: 0,

  variants: {
    size: {
      inherit: {},
      D400: {
        fontSize: "$D400",
        lineHeight: "$D400",
        letterSpacing: "$D400",
        fontWeight: "$600",
      },
      H1: {
        fontSize: "$H1",
        lineHeight: "$H1",
        letterSpacing: "$H1",
        fontWeight: "$600",
      },
      H2: {
        fontSize: "$H2",
        lineHeight: "$H2",
        letterSpacing: "$H2",
        fontWeight: "$600",
      },
      H3: {
        fontSize: "$H3",
        lineHeight: "$H3",
        letterSpacing: "$H3",
        fontWeight: "$600",
      },
      H4: {
        fontSize: "$H4",
        lineHeight: "$H4",
        letterSpacing: "$H4",
        fontWeight: "$600",
      },
      H5: {
        fontSize: "$H5",
        lineHeight: "$H5",
        letterSpacing: "$H5",
        fontWeight: "$600",
      },
      H6: {
        fontSize: "$H6",
        lineHeight: "$H6",
        letterSpacing: "$H6",
        fontWeight: "$600",
      },
      T500: {
        fontSize: "$T500",
        lineHeight: "$T500",
        letterSpacing: "$T500",
      },
      T400: {
        fontSize: "$T400",
        lineHeight: "$T400",
        letterSpacing: "$T400",
      },
      T300: {
        fontSize: "$T300",
        lineHeight: "$T300",
        letterSpacing: "$T300",
      },
      T200: {
        fontSize: "$T200",
        lineHeight: "$T200",
        letterSpacing: "$T200",
      },
      B500: {
        fontSize: "$B500",
        lineHeight: "$B500",
        letterSpacing: "$B500",
        fontWeight: "$500",
      },
      B400: {
        fontSize: "$B400",
        lineHeight: "$B400",
        letterSpacing: "$B400",
        fontWeight: "$500",
      },
      B300: {
        fontSize: "$B300",
        lineHeight: "$B300",
        letterSpacing: "$B300",
        fontWeight: "$500",
      },
      L400: {
        fontSize: "$L400",
        lineHeight: "$L400",
        letterSpacing: "$L400",
        fontWeight: "$600",
      },
      O400: {
        fontSize: "$O400",
        lineHeight: "$O400",
        letterSpacing: "$O400",
        fontWeight: "$600",
        textTransform: "uppercase",
      },
      C400: {
        fontSize: "$C400",
        lineHeight: "$C400",
        letterSpacing: "$C400",
        fontStyle: "italic",
      },
    },
  },
  defaultVariants: {
    size: "T400",
  },
});
