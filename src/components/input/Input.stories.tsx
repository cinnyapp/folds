import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Input } from "./Input";

export default {
  title: "Input",
  component: Input,
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
    size: {
      control: "select",
      options: [300, 400, 500],
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Surface = Template.bind({});
