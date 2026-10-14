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
import { Badge } from "./Badge";
import { Text } from "../text";

export default {
  title: "Badge",
  component: Badge,
  argTypes: {
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
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => (
  <Badge {...args}>
    <Text as="span" size="L400">
      Badge
    </Text>
  </Badge>
);

export const Primary = Template.bind({});
Primary.args = {
  role: "status",
  "aria-label": "A status badge",
};
