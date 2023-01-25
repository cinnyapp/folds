import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from "./Button";
import { Text } from "../text";
import { Icon, Icons } from "../icon";

export default {
  title: "Button",
  component: Button,
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
    fill: {
      control: "select",
      options: ["Solid", "Soft", "None"],
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  size: "400",
  before: <Icon size="200" src={Icons.Plus} />,
  children: (
    <Text as="span" size="B400">
      Get Started
    </Text>
  ),
};
