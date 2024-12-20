import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TextArea } from "./TextArea";

export default {
  title: "TextArea",
  component: TextArea,
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
    resize: {
      control: "select",
      options: ["Vertical", "Horizontal", "Both", "None", "Block", "Inline"],
    },
  },
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => <TextArea {...args} />;

export const Surface = Template.bind({});
Surface.args = {
  placeholder: "Content",
};
