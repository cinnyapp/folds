import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Tooltip } from "./Tooltip";
import { Text } from "../text";

export default {
  title: "Tooltip",
  component: Tooltip,
  argTypes: {
    variant: {
      control: "select",
      options: [
        "Background",
        "Surface",
        "SurfaceVariant",
        "Primary",
        "Secondary",
        "Success",
        "Warning",
        "Critical",
      ],
    },
  },
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => <Tooltip {...args} />;

export const Surface = Template.bind({});
Surface.args = {
  variant: "Success",
  children: <Text size="T300">Tooltip</Text>,
};
