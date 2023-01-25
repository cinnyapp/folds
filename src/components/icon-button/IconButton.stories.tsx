import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { IconButton } from ".";
import { Icon, Icons } from "../icon";

export default {
  title: "IconButton",
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args}>
    <Icon src={Icons.Smile} />
  </IconButton>
);

export const Surface = Template.bind({});
