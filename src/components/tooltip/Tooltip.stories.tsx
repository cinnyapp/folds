import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Tooltip, TooltipProvider } from "./Tooltip";
import { Text } from "../text";
import { IconButton } from "../icon-button";
import { Icon, Icons } from "../icon";
import { Box } from "../box";

export default {
  title: "Tooltip",
  component: Tooltip,
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
  },
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => <Tooltip {...args} />;

export const Surface = Template.bind({});
Surface.args = {
  variant: "Success",
  children: <Text size="T300">Tooltip</Text>,
};

export const Interactive = () => (
  <Box style={{ padding: "100px" }}>
    <TooltipProvider
      position="Right"
      tooltip={
        <Tooltip>
          <Text truncate size="T300">
            Tooltip is Long
          </Text>
        </Tooltip>
      }
    >
      {(ref) => (
        <IconButton variant="Success" size="600" ref={ref}>
          <Icon src={Icons.Info} />
        </IconButton>
      )}
    </TooltipProvider>
  </Box>
);
