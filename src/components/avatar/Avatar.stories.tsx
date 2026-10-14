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
import { Text } from "../text";
import { Avatar, AvatarFallback, AvatarImage } from "./Avatar";

export default {
  title: "Avatar",
  component: Avatar,
  argTypes: {
    size: {
      controls: "select",
      options: ["200", "300", "400", "500"],
    },
    radii: {
      controls: "select",
      options: ["inherit", "0", "300", "400", "500", "Round", "Pill"],
    },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const AvatarWithFallback = Template.bind({});
AvatarWithFallback.args = {
  children: (
    <AvatarFallback style={{ backgroundColor: "blue", color: "white" }}>
      <Text size="H4">A</Text>
    </AvatarFallback>
  ),
};

export const AvatarWithImage = Template.bind({});
AvatarWithImage.args = {
  children: (
    <AvatarImage
      style={{ backgroundColor: "gray" }}
      src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
      alt="Person Name"
    />
  ),
};
