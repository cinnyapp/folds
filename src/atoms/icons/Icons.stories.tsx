import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Icon, IconProps, Icons } from "./index";

const StorybookIconGroup = (props: Omit<IconProps, "src">) => (
  <div style={{ display: "flex", flexWrap: "wrap", gap: "100px", padding: "100px" }}>
    {Object.keys(Icons).map((key) => (
      <Icon key={key} src={Icons[key]} {...props} />
    ))}
  </div>
);

export default {
  title: "Atoms/Icons",
  component: StorybookIconGroup,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <StorybookIconGroup {...args} />;

export const Group = Template.bind({});
Group.args = {
  filled: false,
};
