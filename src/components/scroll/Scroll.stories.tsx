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
import { Scroll } from "./Scroll";

export default {
  title: "Scroll",
  component: Scroll,
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
    hideTrack: {
      control: "boolean",
    },
    visibility: {
      control: "select",
      options: ["Always", "Hover"],
    },

    size: {
      control: "select",
      options: ["0", "300", "400"],
    },
    direction: {
      control: "select",
      options: ["Horizontal", "Vertical", "Both"],
    },
  },
} as ComponentMeta<typeof Scroll>;

const Template: ComponentStory<typeof Scroll> = (args) => <Scroll {...args} />;

export const Vertical = Template.bind({});
Vertical.args = {
  visibility: "Always",
  size: "400",
  style: { height: 500 },
  children: <div style={{ height: 1000, background: "rgba(0, 0, 0, .1)" }} />,
};
