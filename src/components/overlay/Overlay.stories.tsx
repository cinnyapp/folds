import React, { useState } from "react";
import { ComponentMeta } from "@storybook/react";
import { Overlay, OverlayBackDrop, OverlayCenter } from "./Overlay";
import { Tooltip } from "../tooltip";
import { Text } from "../text";
import { Icon, Icons } from "../icon";
import { IconButton } from "../icon-button";

export default {
  title: "Overlay",
  component: Overlay,
} as ComponentMeta<typeof Overlay>;

export const Surface = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <IconButton variant="SurfaceVariant" onClick={() => setOpen(!open)}>
        <Icon src={Icons.VerticalDots} />
      </IconButton>
      <Overlay css={{ padding: "4px" }} open={open} backdrop={<OverlayBackDrop />}>
        <OverlayCenter onClick={() => setOpen(false)}>
          <Tooltip>
            <Text truncate size="T300">
              Hello
            </Text>
          </Tooltip>
        </OverlayCenter>
      </Overlay>
    </>
  );
};
