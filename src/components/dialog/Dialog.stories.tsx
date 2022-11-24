import React, { useState } from "react";
import { ComponentMeta } from "@storybook/react";
import { Overlay, OverlayBackDrop, OverlayCenter } from "../overlay";
import { Text } from "../text";
import { Icon, Icons } from "../icon";
import { IconButton } from "../icon-button";
import { Dialog } from "./Dialog";
import { Header } from "../header";
import { Button } from "../button";
import { Line } from "../line";
import { Box } from "../box";

export default {
  title: "Dialog",
  component: Dialog,
} as ComponentMeta<typeof Dialog>;

export const Surface = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <IconButton variant="SurfaceVariant" onClick={() => setOpen(!open)}>
        <Icon src={Icons.VerticalDots} />
      </IconButton>
      <Overlay open={open} backdrop={<OverlayBackDrop />}>
        <OverlayCenter
          onClick={(evt) => {
            if (evt.currentTarget === evt.target) setOpen(false);
          }}
        >
          <Dialog>
            <Header size="500" css={{ p: "0 $500" }}>
              <Text size="H4" truncate>
                Dialog
              </Text>
            </Header>
            <Line />
            <Box css={{ p: "$500", d: "flex", fxD: "column", gap: "$500" }}>
              <Text size="T300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacinia ornare lectus
                mauris in vel at pretium, eget. Viverra dignissim faucibus volutpat in mauris. Nulla
                dui lacus ut ullamcorper fermentum tincidunt a cras.
              </Text>
              <Button variant="Secondary" fill="Soft" onClick={() => setOpen(false)}>
                <Text size="B400">Cancel</Text>
              </Button>
            </Box>
          </Dialog>
        </OverlayCenter>
      </Overlay>
    </>
  );
};
