import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Icon, StorybookIconGroup } from "./index";

export default {
  title: "Atoms/Icons",
  component: StorybookIconGroup,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <StorybookIconGroup {...args} />;

export const Group = Template.bind({});
Group.args = {
  filled: false,
};
