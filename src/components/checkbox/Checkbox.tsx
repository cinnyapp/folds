import React, { ButtonHTMLAttributes, forwardRef } from "react";

import { CSS, styled } from "../../config";
import { Icon, Icons } from "../icon";

const StyledCheckbox = styled("button", {});

interface CheckboxProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "value" | "children"> {
  value?: boolean;
  css?: CSS;
}

export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(
  ({ value = false, ...props }, ref) => (
    <StyledCheckbox role="checkbox" defaultChecked={false} {...props} ref={ref}>
      <input
        defaultChecked={value}
        type="checkbox"
        onChange={(a) => console.log(a.target.checked)}
      />
      {value && <Icon src={Icons.Check} />}
    </StyledCheckbox>
  )
);
