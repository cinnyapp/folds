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
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const AvatarWithFallback = Template.bind({});
AvatarWithFallback.args = {
  children: (
    <AvatarFallback
      css={{
        b: "blue",
        c: "white",
      }}
    >
      <Text size="H4">A</Text>
    </AvatarFallback>
  ),
};

export const AvatarWithImage = Template.bind({});
AvatarWithImage.args = {
  children: (
    <AvatarImage
      css={{ b: "gray" }}
      src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
      alt="Person Name"
    />
  ),
};
