import React, { useState } from "react";
import { ComponentMeta } from "@storybook/react";
import { Overlay, OverlayBackDrop } from "./Overlay";
import { Tooltip } from "../tooltip";
import { Text } from "../text";
import { Box } from "../box";
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
      <Overlay open={open} backdrop={<OverlayBackDrop />}>
        <Box
          onClick={() => setOpen(false)}
          css={{ h: "100%", d: "flex", alI: "center", juC: "center" }}
        >
          <Tooltip>
            <Text truncate size="T300">
              Hello
            </Text>
          </Tooltip>
        </Box>
      </Overlay>
    </>
  );
};
