import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { RadioButton } from "./RadioButton";

export default {
  title: "RadioButton",
  component: RadioButton,
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
} as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = (args) => <RadioButton {...args} />;

export const Secondary = Template.bind({});
Secondary.args = {
  defaultChecked: false,
};
