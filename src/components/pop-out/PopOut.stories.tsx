import FocusTrap from "focus-trap-react";
import React, { MouseEventHandler, useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Text } from "../text";
import { PopOut } from "./PopOut";
import { Menu, MenuItem } from "../menu";
import { Icon, Icons } from "../icon";
import { IconButton } from "../icon-button";
import { config } from "../../theme/config.css";
import { Box } from "../box";
import { RectCords } from "../util";

export default {
  title: "PopOut",
  component: PopOut,
} as ComponentMeta<typeof PopOut>;

const Template: ComponentStory<typeof PopOut> = (args) => {
  const [anchor, setAnchor] = useState<RectCords>();

  const handleOpen: MouseEventHandler<HTMLElement> = (evt) => {
    const rect = evt.currentTarget?.getBoundingClientRect();
    setAnchor(anchor ? undefined : rect);
  };
  const handleContextOpen: MouseEventHandler<HTMLElement> = (evt) => {
    evt.preventDefault();
    const rect = {
      x: evt.clientX,
      y: evt.clientY,
      width: 0,
      height: 0,
    };
    setAnchor(anchor ? undefined : rect);
  };

  return (
    <Box
      onContextMenu={handleContextOpen}
      justifyContent="Center"
      alignItems="Center"
      style={{ height: "100vh" }}
    >
      <PopOut
        {...args}
        anchor={anchor}
        offset={anchor?.width === 0 ? 0 : undefined}
        content={
          <FocusTrap
            focusTrapOptions={{
              initialFocus: false,
              onDeactivate: () => setAnchor(undefined),
              clickOutsideDeactivates: true,
              isKeyForward: (evt: KeyboardEvent) => evt.key === "ArrowDown",
              isKeyBackward: (evt: KeyboardEvent) => evt.key === "ArrowUp",
            }}
          >
            <Menu style={{ padding: config.space.S100 }}>
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
      />
      <IconButton variant="SurfaceVariant" onClick={handleOpen}>
        <Icon src={Icons.VerticalDots} />
      </IconButton>
    </Box>
  );
};

export const Interactive = Template.bind({});
