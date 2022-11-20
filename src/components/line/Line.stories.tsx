import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Line } from "./Line";

export default {
  title: "Line",
  component: Line,
  argTypes: {
    variant: {
      control: "select",
      options: [
        "inherit",
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
    direction: {
      control: "select",
      options: ["Horizontal", "Vertical"],
    },
    size: {
      control: "select",
      options: [300, 400, 500, 600, 700],
    },
  },
} as ComponentMeta<typeof Line>;

const Template: ComponentStory<typeof Line> = (args) => <Line {...args} />;

export const Surface = Template.bind({});
