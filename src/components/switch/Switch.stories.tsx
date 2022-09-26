import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Switch } from "./Switch";

export default {
  title: "Switch",
  component: Switch,
  argTypes: {
    variant: {
      control: "select",
      options: ["Primary", "Secondary", "Success", "Warning", "Critical"],
    },
  },
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "Secondary",
  "aria-disabled": false,
  value: false,
};
