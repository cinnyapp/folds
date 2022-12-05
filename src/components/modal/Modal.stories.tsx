import React, { useState } from "react";
import FocusTrap from "focus-trap-react";
import { ComponentMeta } from "@storybook/react";
import { Overlay, OverlayBackDrop, OverlayCenter } from "../overlay";
import { Text } from "../text";
import { Icon, Icons } from "../icon";
import { IconButton } from "../icon-button";
import { Modal } from "./Modal";
import { Header } from "../header";
import { Button } from "../button";
import { Box } from "../box";

export default {
  title: "Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>;

export const Surface = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <IconButton variant="SurfaceVariant" onClick={() => setOpen(!open)}>
        <Icon src={Icons.VerticalDots} />
      </IconButton>
      <Overlay open={open} backdrop={<OverlayBackDrop />}>
        <OverlayCenter>
          <FocusTrap
            focusTrapOptions={{
              initialFocus: false,
              onDeactivate: () => setOpen(false),
              clickOutsideDeactivates: true,
            }}
          >
            <Modal size="300">
              <Header size="600" css={{ p: "0 $500", mT: "$100" }}>
                <Text size="H4" truncate>
                  Modal
                </Text>
              </Header>
              <Box css={{ p: "0 $500 $500", d: "flex", fxD: "column", gap: "$500" }}>
                <Text size="T300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacinia ornare lectus
                  mauris in vel at pretium, eget. Viverra dignissim faucibus volutpat in mauris.
                  Nulla dui lacus ut ullamcorper fermentum tincidunt a cras.
                </Text>
                <Button variant="Secondary" fill="Soft" onClick={() => setOpen(false)}>
                  <Text size="B400">Cancel</Text>
                </Button>
              </Box>
            </Modal>
          </FocusTrap>
        </OverlayCenter>
      </Overlay>
    </>
  );
};
