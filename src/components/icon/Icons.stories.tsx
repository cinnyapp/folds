import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Icon, IconProps, Icons } from "./index";

const StorybookIconGroup = (props: Omit<IconProps, "src">) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      flexWrap: "wrap",
      gap: "32px",
      padding: "100px",
    }}
  >
    {Object.keys(Icons).map((key) => (
      <div style={{ display: "flex", gap: "24px", alignItems: "center" }} key={key}>
        <Icon src={Icons[key]} {...props} />
        <span style={{ fontFamily: "arial", fontSize: "14px" }}>{key}</span>
      </div>
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
  size: 400,
  color: "black",
};
