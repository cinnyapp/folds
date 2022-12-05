import FocusTrap from "focus-trap-react";
import React, { useState } from "react";
import { ComponentMeta } from "@storybook/react";
import { Text } from "../text";
import { PopOut } from "./PopOut";
import { Box } from "../box";
import { Menu, MenuItem } from "../menu";
import { Header } from "../header";
import { Icon, Icons } from "../icon";
import { IconButton } from "../icon-button";

export default {
  title: "PopOut",
  component: PopOut,
} as ComponentMeta<typeof PopOut>;

export const Interactive = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box css={{ height: "100vh" }}>
      <PopOut
        open={open}
        align="start"
        content={
          <FocusTrap
            focusTrapOptions={{
              initialFocus: false,
              onDeactivate: () => setOpen(false),
              clickOutsideDeactivates: true,
            }}
          >
            <Menu>
              <Header size="300" css={{ borderBottomWidth: "$300", padding: "0 $300" }}>
                <Text as="label" size="L400">
                  Options
                </Text>
              </Header>
              <MenuItem before={<Icon size="100" src={Icons.Pencil} />}>
                <Text size="B400">Menu Item 1</Text>
              </MenuItem>
              <MenuItem before={<Icon size="100" src={Icons.Pencil} />}>
                <Text size="B400">Menu Item 2</Text>
              </MenuItem>
              <MenuItem before={<Icon size="100" src={Icons.Pencil} />}>
                <Text size="B400">Menu Item 3</Text>
              </MenuItem>
            </Menu>
          </FocusTrap>
        }
      >
        {(ref) => (
          <IconButton variant="SurfaceVariant" onClick={() => setOpen((state) => !state)} ref={ref}>
            <Icon src={Icons.VerticalDots} />
          </IconButton>
        )}
      </PopOut>
    </Box>
  );
};
