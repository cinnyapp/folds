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
import { Chip } from "./Chip";
import { Text } from "../text";
import { Icon, Icons } from "../icon";

export default {
  title: "Chip",
  component: Chip,
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
    size: {
      control: "select",
      options: ["400", "500"],
    },
    outlined: {
      control: "boolean",
    },
  },
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => (
  <Chip {...args}>
    <Text as="span" size="T200">
      Attachment
    </Text>
  </Chip>
);

export const Surface = Template.bind({});
Surface.args = {
  variant: "Surface",
  "aria-selected": false,
  "aria-label": "Apply attachment filter",
  size: "400",
  after: <Icon size="50" src={Icons.Cross} />,
};
