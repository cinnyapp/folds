import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Badge } from "./Badge";
import { Text } from "../text";

export default {
  title: "Badge",
  component: Badge,
  argTypes: {
    variant: {
      control: "select",
      options: ["Primary", "Secondary", "Success", "Warning", "Critical"],
    },
    outlined: {
      control: "boolean",
    },
    fill: {
      control: "select",
      options: ["Solid", "Soft", "None"],
    },
  },
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => (
  <Badge {...args}>
    <Text as="span" size="L400">
      Badge
    </Text>
  </Badge>
);

export const Primary = Template.bind({});
Primary.args = {
  role: "status",
  "aria-label": "A status badge",
};
