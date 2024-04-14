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
  <Box wrap="Wrap" gap="400" style={{ padding: "100px" }}>
    <TooltipProvider
      position="Top"
      align="Start"
      tooltip={
        <Tooltip>
          <Text truncate size="T300">
            Top Start
          </Text>
        </Tooltip>
      }
    >
      {(ref) => (
        <IconButton variant="SurfaceVariant" size="600" ref={ref}>
          <Icon src={Icons.Info} />
        </IconButton>
      )}
    </TooltipProvider>
    <TooltipProvider
      position="Top"
      align="Center"
      tooltip={
        <Tooltip>
          <Text truncate size="T300">
            Top Center
          </Text>
        </Tooltip>
      }
    >
      {(ref) => (
        <IconButton variant="SurfaceVariant" size="600" ref={ref}>
          <Icon src={Icons.Info} />
        </IconButton>
      )}
    </TooltipProvider>
    <TooltipProvider
      position="Top"
      align="End"
      tooltip={
        <Tooltip>
          <Text truncate size="T300">
            Top End
          </Text>
        </Tooltip>
      }
    >
      {(ref) => (
        <IconButton variant="SurfaceVariant" size="600" ref={ref}>
          <Icon src={Icons.Info} />
        </IconButton>
      )}
    </TooltipProvider>
    <TooltipProvider
      position="Right"
      align="Start"
      tooltip={
        <Tooltip>
          <Text truncate size="T300">
            Right Start
          </Text>
        </Tooltip>
      }
    >
      {(ref) => (
        <IconButton variant="SurfaceVariant" size="600" ref={ref}>
          <Icon src={Icons.Info} />
        </IconButton>
      )}
    </TooltipProvider>
    <TooltipProvider
      position="Right"
      align="Center"
      tooltip={
        <Tooltip>
          <Text truncate size="T300">
            Right Center
          </Text>
        </Tooltip>
      }
    >
      {(ref) => (
        <IconButton variant="SurfaceVariant" size="600" ref={ref}>
          <Icon src={Icons.Info} />
        </IconButton>
      )}
    </TooltipProvider>
    <TooltipProvider
      position="Right"
      align="End"
      tooltip={
        <Tooltip>
          <Text truncate size="T300">
            Right End
          </Text>
        </Tooltip>
      }
    >
      {(ref) => (
        <IconButton variant="SurfaceVariant" size="600" ref={ref}>
          <Icon src={Icons.Info} />
        </IconButton>
      )}
    </TooltipProvider>
    <TooltipProvider
      position="Bottom"
      align="Start"
      tooltip={
        <Tooltip>
          <Text truncate size="T300">
            Bottom Start
          </Text>
        </Tooltip>
      }
    >
      {(ref) => (
        <IconButton variant="SurfaceVariant" size="600" ref={ref}>
          <Icon src={Icons.Info} />
        </IconButton>
      )}
    </TooltipProvider>
    <TooltipProvider
      position="Bottom"
      align="Center"
      tooltip={
        <Tooltip>
          <Text truncate size="T300">
            Bottom Center
          </Text>
        </Tooltip>
      }
    >
      {(ref) => (
        <IconButton variant="SurfaceVariant" size="600" ref={ref}>
          <Icon src={Icons.Info} />
        </IconButton>
      )}
    </TooltipProvider>
    <TooltipProvider
      position="Bottom"
      align="End"
      tooltip={
        <Tooltip>
          <Text truncate size="T300">
            Bottom End
          </Text>
        </Tooltip>
      }
    >
      {(ref) => (
        <IconButton variant="SurfaceVariant" size="600" ref={ref}>
          <Icon src={Icons.Info} />
        </IconButton>
      )}
    </TooltipProvider>
    <TooltipProvider
      position="Left"
      align="Start"
      tooltip={
        <Tooltip>
          <Text truncate size="T300">
            Left Start
          </Text>
        </Tooltip>
      }
    >
      {(ref) => (
        <IconButton variant="SurfaceVariant" size="600" ref={ref}>
          <Icon src={Icons.Info} />
        </IconButton>
      )}
    </TooltipProvider>
    <TooltipProvider
      position="Left"
      align="Center"
      tooltip={
        <Tooltip>
          <Text truncate size="T300">
            Left Center
          </Text>
        </Tooltip>
      }
    >
      {(ref) => (
        <IconButton variant="SurfaceVariant" size="600" ref={ref}>
          <Icon src={Icons.Info} />
        </IconButton>
      )}
    </TooltipProvider>
    <TooltipProvider
      position="Left"
      align="End"
      tooltip={
        <Tooltip>
          <Text truncate size="T300">
            Left End
          </Text>
        </Tooltip>
      }
    >
      {(ref) => (
        <IconButton variant="SurfaceVariant" size="600" ref={ref}>
          <Icon src={Icons.Info} />
        </IconButton>
      )}
    </TooltipProvider>
  </Box>
);
