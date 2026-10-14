/*
Cinny Project
Copyright 2022-present Ajay Bura
SPDX-License-Identifier: Apache-2.0
https://cinny.in

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

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
