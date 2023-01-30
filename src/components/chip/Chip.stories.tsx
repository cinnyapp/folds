import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Chip } from "./Chip";
import { Text } from "../text";
import { Icon, Icons } from "../icon";

export default {
  title: "Chip",
  component: Chip,
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
      options: ["400", "500"],
    },
    outlined: {
      control: "boolean",
    },
  },
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => (
  <Chip {...args}>
    <Text as="span" size="T200">
      Attachment
    </Text>
  </Chip>
);

export const Surface = Template.bind({});
Surface.args = {
  variant: "Surface",
  "aria-selected": false,
  "aria-label": "Apply attachment filter",
  size: "400",
  after: <Icon size="50" src={Icons.Cross} />,
};
