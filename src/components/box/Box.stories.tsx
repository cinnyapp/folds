import React from "react";
import { ComponentMeta } from "@storybook/react";
import { Box } from ".";

export default {
  title: "Box",
  component: Box,
} as ComponentMeta<typeof Box>;

export const EmptyBox = () => <Box css={{ bC: "$BackgroundContainer", w: "100px", h: "100px" }} />;
