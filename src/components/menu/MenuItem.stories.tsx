import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MenuItem } from "./MenuItem";
import { Text } from "../text";
import { Icon, Icons } from "../icon";

export default {
  title: "MenuItem",
  component: MenuItem,
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
    fill: {
      control: "select",
      options: ["Soft", "None"],
    },
    radii: {
      control: "select",
      options: ["inherit", 0, 300, 400, 500, "Pill"],
    },
  },
} as ComponentMeta<typeof MenuItem>;

const Template: ComponentStory<typeof MenuItem> = (args) => <MenuItem {...args} />;

export const Surface = Template.bind({});
Surface.args = {
  before: <Icon size="100" src={Icons.Pencil} />,
  children: <Text size="B400">Menu Item</Text>,
};
