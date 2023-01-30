import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Spinner } from "./Spinner";

export default {
  title: "Spinner",
  component: Spinner,
  argTypes: {
    variant: {
      control: "select",
      options: ["Primary", "Secondary", "Success", "Warning", "Critical"],
    },
    fill: {
      control: "select",
      options: ["Solid", "Soft"],
    },
    size: {
      control: "select",
      options: ["50", "100", "200", "300", "400", "500", "600"],
    },
  },
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => <Spinner {...args} />;

export const Secondary = Template.bind({});
