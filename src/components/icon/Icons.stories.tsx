import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Icon, IconProps, Icons, IconName } from ".";
import { Text } from "../text";
import { Box } from "../box";

const StorybookIconGroup = (props: Omit<IconProps, "src">) => (
  <Box wrap="Wrap" gap="700" style={{ padding: "100px" }}>
    {(Object.keys(Icons) as IconName[]).map((key) => (
      <Box
        style={{ width: 80 }}
        direction="Column"
        gap="300"
        alignItems="Center"
        justifyContent="Center"
        key={key}
      >
        <Icon src={Icons[key]} {...props} />
        <Text align="Center" size="T200">
          {key}
        </Text>
      </Box>
    ))}
  </Box>
);

export default {
  title: "Icons",
  component: StorybookIconGroup,
  argTypes: {
    size: {
      control: "select",
      options: ["Inherit", "50", "100", "200", "300", "400", "500", "600"],
    },
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <StorybookIconGroup {...args} />;

export const Group = Template.bind({});
Group.args = {
  filled: false,
  size: "400",
};
