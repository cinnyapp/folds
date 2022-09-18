import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Icon, IconProps, Icons } from ".";
import { Text } from "../text";
import { Box } from "../box";

const StorybookIconGroup = (props: Omit<IconProps, "src">) => (
  <Box css={{ d: "flex", fxD: "column", fxW: "wrap", gap: "$700", p: "100px" }}>
    {Object.keys(Icons).map((key) => (
      <Box css={{ d: "flex", gap: "24px", alI: "center" }} key={key}>
        <Icon src={Icons[key]} {...props} />
        <Text>{key}</Text>
      </Box>
    ))}
  </Box>
);

export default {
  title: "Icons",
  component: StorybookIconGroup,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <StorybookIconGroup {...args} />;

export const Group = Template.bind({});
Group.args = {
  filled: false,
  size: 400,
  css: { color: "black" },
};
