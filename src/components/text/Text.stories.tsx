import React from "react";
import { ComponentMeta } from "@storybook/react";

import { Text } from ".";
import { config } from "../../theme/config.css";

export default {
  title: "Text",
  component: Text,
} as ComponentMeta<typeof Text>;

const loremIpsum = `
Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex inventore laboriosam veritatis
nostrum illo dolorem accusantium hic, aperiam voluptate nisi, pariatur aliquid officia dicta
aut. Nostrum earum hic vel quaerat.`;
const loremIpsumHeading = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";

export const Typography = () => (
  <Text size="D400">
    Display{" "}
    <Text as="span" size="inherit" style={{ fontWeight: config.fontWeight.W800 }}>
      Typography
    </Text>
  </Text>
);
export const Display400 = () => <Text size="D400">Display</Text>;
export const Heading1 = () => <Text size="H1">{loremIpsumHeading}</Text>;
export const Heading2 = () => <Text size="H2">{loremIpsumHeading}</Text>;
export const Heading3 = () => <Text size="H3">{loremIpsumHeading}</Text>;
export const Heading4 = () => <Text size="H4">{loremIpsumHeading}</Text>;
export const Heading5 = () => <Text size="H5">{loremIpsumHeading}</Text>;
export const Heading6 = () => <Text size="H6">{loremIpsumHeading}</Text>;
export const Text500 = () => <Text size="T500">{loremIpsum}</Text>;
export const Text400 = () => <Text size="T400">{loremIpsum}</Text>;
export const Text300 = () => <Text size="T300">{loremIpsum}</Text>;
export const Text200 = () => <Text size="T200">{loremIpsum}</Text>;
export const Button500 = () => <Text size="B500">Typography</Text>;
export const Button400 = () => <Text size="B400">Typography</Text>;
export const Button300 = () => <Text size="B300">Typography</Text>;
export const Label400 = () => <Text size="L400">Label</Text>;
export const Overline400 = () => <Text size="O400">Typography</Text>;
export const Caption400 = () => <Text size="C400">{loremIpsum}</Text>;
