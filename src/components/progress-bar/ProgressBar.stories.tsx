import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ProgressBar } from "./ProgressBar";

export default {
  title: "ProgressBar",
  component: ProgressBar,
  argTypes: {
    size: {
      control: "select",
      options: ["300", "400", "500"],
    },
    variant: {
      control: "select",
      options: ["Primary", "Secondary", "Success", "Warning", "Critical"],
    },
    outlined: {
      control: "boolean",
    },
    radii: {
      control: "select",
      options: ["0", "300", "400", "500", "Pill"],
    },
    fill: {
      control: "select",
      options: ["Solid", "Soft", "None"],
    },
  },
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = (args) => <ProgressBar {...args} />;

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "Secondary",
  min: 0,
  max: 100,
  value: 26,
  outlined: false,
};
