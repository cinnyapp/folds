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
import { Line } from "./Line";

export default {
  title: "Line",
  component: Line,
  argTypes: {
    variant: {
      control: "select",
      options: [
        "inherit",
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
    direction: {
      control: "select",
      options: ["Horizontal", "Vertical"],
    },
    size: {
      control: "select",
      options: ["300", "400", "500", "600", "700"],
    },
  },
} as ComponentMeta<typeof Line>;

const Template: ComponentStory<typeof Line> = (args) => <Line {...args} />;

export const Surface = Template.bind({});
