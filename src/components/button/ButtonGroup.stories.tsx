import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from "./Button";
import { ButtonGroup } from "./ButtonGroup";
import { Icon, Icons } from "../icon";
import { Text } from "../text";
import { Line } from "../line";

export default {
  title: "ButtonGroup",
  component: ButtonGroup,
  argTypes: {
    variant: {
      control: "select",
      options: ["Primary", "Secondary", "Success", "Warning", "Critical"],
    },
    fill: {
      control: "select",
      options: ["Solid", "Soft", "None"],
    },
  },
} as ComponentMeta<typeof ButtonGroup>;

const Template: ComponentStory<typeof Button> = (args) => {
  const { variant, fill } = args;

  return (
    <ButtonGroup {...args}>
      <Button variant={variant} fill={fill}>
        <Text size="B400">Download (Linux)</Text>
      </Button>
      <Line direction="Vertical" variant="inherit" />
      <Button variant={variant} fill={fill}>
        <Icon src={Icons.ChevronBottom} />
      </Button>
    </ButtonGroup>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
