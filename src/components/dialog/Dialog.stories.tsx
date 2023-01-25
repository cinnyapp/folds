import React, { useState } from "react";
import FocusTrap from "focus-trap-react";
import { ComponentMeta } from "@storybook/react";
import { Overlay, OverlayBackdrop, OverlayCenter } from "../overlay";
import { Text } from "../text";
import { Icon, Icons } from "../icon";
import { IconButton } from "../icon-button";
import { Dialog } from "./Dialog";
import { Header } from "../header";
import { Button } from "../button";
import { Box } from "../box";
import { config } from "../../theme/config.css";

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
      <Overlay open={open} backdrop={<OverlayBackdrop />}>
        <OverlayCenter>
          <FocusTrap
            focusTrapOptions={{
              initialFocus: false,
              onDeactivate: () => setOpen(false),
              clickOutsideDeactivates: true,
            }}
          >
            <Dialog>
              <Header
                size="600"
                style={{ padding: `0 ${config.space.S500}`, marginTop: config.space.S100 }}
              >
                <Text size="H4" truncate>
                  Dialog
                </Text>
              </Header>
              <Box
                direction="Column"
                gap="500"
                style={{ padding: `0 ${config.space.S500} ${config.space.S500}` }}
              >
                <Text size="T300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacinia ornare lectus
                  mauris in vel at pretium, eget. Viverra dignissim faucibus volutpat in mauris.
                  Nulla dui lacus ut ullamcorper fermentum tincidunt a cras.
                </Text>
                <Button variant="Secondary" fill="Soft" onClick={() => setOpen(false)}>
                  <Text size="B400">Cancel</Text>
                </Button>
              </Box>
            </Dialog>
          </FocusTrap>
        </OverlayCenter>
      </Overlay>
    </>
  );
};
