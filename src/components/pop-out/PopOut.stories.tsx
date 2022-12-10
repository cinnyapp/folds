import FocusTrap from "focus-trap-react";
import React, { useState } from "react";
import { ComponentMeta } from "@storybook/react";
import { Text } from "../text";
import { PopOut } from "./PopOut";
import { Box } from "../box";
import { Menu, MenuItem } from "../menu";
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
              isKeyForward: (evt: KeyboardEvent) => evt.key === "ArrowDown",
              isKeyBackward: (evt: KeyboardEvent) => evt.key === "ArrowUp",
            }}
          >
            <Menu css={{ p: "$100" }}>
              <MenuItem radii="300" before={<Icon size="100" src={Icons.Pencil} />}>
                <Text size="B400">Menu Item 1</Text>
              </MenuItem>
              <MenuItem radii="300" before={<Icon size="100" src={Icons.Pencil} />}>
                <Text size="B400">Menu Item 2</Text>
              </MenuItem>
              <MenuItem radii="300" before={<Icon size="100" src={Icons.Pencil} />}>
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
