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
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Header } from "../header";
import { Icon, Icons } from "../icon";
import { Text } from "../text";
import { Menu } from "./Menu";
import { MenuItem } from "./MenuItem";
import { config } from "../../theme/config.css";

export default {
  title: "Menu",
  component: Menu,
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />;

export const Surface = Template.bind({});
Surface.args = {
  children: (
    <>
      <Header
        size="300"
        style={{ borderBottomWidth: config.borderWidth.B300, padding: `0 ${config.space.S300}` }}
      >
        <Text as="label" size="L400">
          Options
        </Text>
      </Header>
      <div style={{ padding: config.space.S100 }}>
        <MenuItem radii="300" before={<Icon size="100" src={Icons.Pencil} />}>
          <Text size="B400">Menu Item 1</Text>
        </MenuItem>
        <MenuItem radii="300" before={<Icon size="100" src={Icons.Pencil} />}>
          <Text size="B400">Menu Item 2</Text>
        </MenuItem>
        <MenuItem radii="300" before={<Icon size="100" src={Icons.Pencil} />}>
          <Text size="B400">Menu Item 3</Text>
        </MenuItem>
      </div>
    </>
  ),
};
