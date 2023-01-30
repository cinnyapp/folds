import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Box } from ".";

export default {
  title: "Box",
  component: Box,
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => (
  <Box {...args}>
    <div style={{ backgroundColor: "white", width: "40px", height: "40px" }} />
    <div style={{ backgroundColor: "white", width: "40px", height: "40px" }} />
    <div style={{ backgroundColor: "white", width: "40px", height: "40px" }} />
    <div style={{ backgroundColor: "white", width: "40px", height: "40px" }} />
    <div style={{ backgroundColor: "white", width: "40px", height: "40px" }} />
    <div style={{ backgroundColor: "white", width: "40px", height: "40px" }} />
    <div style={{ backgroundColor: "white", width: "40px", height: "40px" }} />
    <div style={{ backgroundColor: "white", width: "40px", height: "40px" }} />
    <div style={{ backgroundColor: "white", width: "40px", height: "40px" }} />
    <div style={{ backgroundColor: "white", width: "40px", height: "40px" }} />
    <div style={{ backgroundColor: "white", width: "40px", height: "40px" }} />
    <div style={{ backgroundColor: "white", width: "40px", height: "40px" }} />
  </Box>
);

export const FlexBox = Template.bind({});
FlexBox.args = {
  style: { backgroundColor: "gray", width: "100%", height: "600px", padding: "16px" },
};
