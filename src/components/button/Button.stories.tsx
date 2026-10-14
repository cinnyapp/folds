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
import { Button } from "./Button";
import { Text } from "../text";
import { Icon, Icons } from "../icon";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    size: {
      control: "select",
      options: ["300", "400", "500"],
    },
    variant: {
      control: "select",
      options: ["Primary", "Secondary", "Success", "Warning", "Critical"],
    },
    outlined: {
      control: "boolean",
    },
    fill: {
      control: "select",
      options: ["Solid", "Soft", "None"],
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  size: "400",
  before: <Icon size="200" src={Icons.Plus} />,
  children: (
    <Text as="span" size="B400">
      Get Started
    </Text>
  ),
};
