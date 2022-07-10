import React from "react";
import { styled } from "../../config";
import { Icons } from "./Icons";

export type IconScale = "50" | "100" | "200" | "300" | "400" | "500" | "600";

export interface IconProps extends React.SVGAttributes<SVGElement> {
  color?: string;
  filled?: boolean;
  scale?: IconScale;
  src: (filled?: boolean) => JSX.Element;
}

const StyledIcon = styled("svg", {
  $$IconScale: "$sizes$X400",
  width: "$$IconScale",
  height: "$$IconScale",
  variants: {
    scale: {
      50: {
        $$IconScale: "$sizes$X50",
      },
      100: {
        $$IconScale: "$sizes$X100",
      },
      200: {
        $$IconScale: "$sizes$X200",
      },
      300: {
        $$IconScale: "$sizes$X300",
      },
      400: {
        $$IconScale: "$sizes$X400",
      },
      500: {
        $$IconScale: "$sizes$X500",
      },
      600: {
        $$IconScale: "$sizes$X600",
      },
    },
  },
});

export const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", filled = false, scale, src, ...props }, ref) => (
    <StyledIcon
      scale={scale}
      viewBox="0 0 24 24"
      fill="none"
      color={color}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      ref={ref}
    >
      {src(filled)}
    </StyledIcon>
  )
);

export const StorybookIconGroup = (props: Omit<IconProps, "src">) => (
  <div style={{ display: "flex", flexWrap: "wrap", gap: "100px", padding: "100px" }}>
    {Object.keys(Icons).map((key) => (
      <Icon key={key} src={Icons[key]} {...props} />
    ))}
  </div>
);
