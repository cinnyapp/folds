import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Checkbox } from "./Checkbox";

export default {
  title: "Checkbox",
  component: Checkbox,
  argTypes: {
    variant: {
      control: "select",
      options: ["Primary", "Secondary", "Success", "Warning", "Critical"],
    },
    size: {
      control: "select",
      options: [50, 100, 200, 300, 400, 500, 600],
    },
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Secondary = Template.bind({});
Secondary.args = {
  defaultChecked: true,
};
