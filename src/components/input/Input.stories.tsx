import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Input } from "./Input";
import { Icon, Icons } from "../icon";
import { IconButton } from "../icon-button";

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
      options: ["300", "400", "500"],
    },
    outlined: {
      control: "boolean",
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Surface = Template.bind({});
Surface.args = {
  before: <Icon size="100" src={Icons.Search} />,
  after: (
    <IconButton radii="300" size="300" variant="Background">
      <Icon size="100" src={Icons.Cross} />
    </IconButton>
  ),
  placeholder: "Search",
};
