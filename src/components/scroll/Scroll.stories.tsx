import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Box } from "../box";
import { Scroll } from "./Scroll";

export default {
  title: "Scroll",
  component: Scroll,
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
    hideTrack: {
      control: "boolean",
    },
    visibility: {
      control: "select",
      options: ["Always", "Hover"],
    },

    size: {
      control: "select",
      options: [0, 300, 400],
    },
    direction: {
      control: "select",
      options: ["Horizontal", "Vertical", "Both"],
    },
  },
} as ComponentMeta<typeof Scroll>;

const Template: ComponentStory<typeof Scroll> = (args) => <Scroll {...args} />;

export const Vertical = Template.bind({});
Vertical.args = {
  visibility: "Always",
  size: 400,
  css: { height: 500 },
  children: <Box css={{ height: 1000, background: "rgba(0, 0, 0, .1)" }} />,
};
