import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Header } from "./Header";
import { Text } from "../text";

export default {
  title: "Header",
  component: Header,
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
      options: ["300", "400", "500", "600", "700"],
    },
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => (
  <Header {...args}>
    <Text as="span" size="H4">
      Header
    </Text>
  </Header>
);

export const Surface = Template.bind({});
Surface.args = {
  variant: "Surface",
};
