import React from "react";
import { ComponentMeta } from "@storybook/react";

import { IconButton } from ".";
import { Icon, Icons } from "../icon";
import { Box } from "../box";

export default {
  title: "IconButton",
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

export const IconButton600 = () => (
  <Box css={{ d: "flex", alI: "start", fxW: "wrap", gap: "$400" }}>
    <IconButton size="600" variant="Background">
      <Icon src={Icons.Smile} />
    </IconButton>

    <IconButton size="600" variant="Surface">
      <Icon src={Icons.Smile} />
    </IconButton>

    <IconButton size="600" variant="SurfaceVariant">
      <Icon src={Icons.Smile} />
    </IconButton>

    <IconButton size="600" variant="Primary">
      <Icon src={Icons.Smile} />
    </IconButton>

    <IconButton size="600" variant="Secondary">
      <Icon src={Icons.Smile} />
    </IconButton>

    <IconButton size="600" variant="Success">
      <Icon src={Icons.Smile} />
    </IconButton>

    <IconButton size="600" variant="Warning">
      <Icon src={Icons.Smile} />
    </IconButton>

    <IconButton size="600" variant="Critical">
      <Icon src={Icons.Smile} />
    </IconButton>

    <IconButton aria-disabled size="600" variant="Surface">
      <Icon src={Icons.Smile} />
    </IconButton>

    <IconButton aria-pressed size="600" variant="Success">
      <Icon src={Icons.Smile} />
    </IconButton>
  </Box>
);

export const IconButton500 = () => (
  <Box css={{ d: "flex", alI: "start", fxW: "wrap", gap: "$400" }}>
    <IconButton size="500" variant="Background">
      <Icon src={Icons.Smile} />
    </IconButton>

    <IconButton size="500" variant="Surface">
      <Icon src={Icons.Smile} />
    </IconButton>

    <IconButton size="500" variant="SurfaceVariant">
      <Icon src={Icons.Smile} />
    </IconButton>

    <IconButton size="500" variant="Primary">
      <Icon src={Icons.Smile} />
    </IconButton>

    <IconButton size="500" variant="Secondary">
      <Icon src={Icons.Smile} />
    </IconButton>

    <IconButton size="500" variant="Success">
      <Icon src={Icons.Smile} />
    </IconButton>

    <IconButton size="500" variant="Warning">
      <Icon src={Icons.Smile} />
    </IconButton>

    <IconButton size="500" variant="Critical">
      <Icon src={Icons.Smile} />
    </IconButton>
  </Box>
);

export const IconButton400 = () => (
  <Box css={{ d: "flex", alI: "start", fxW: "wrap", gap: "$400" }}>
    <IconButton variant="Background">
      <Icon src={Icons.Smile} />
    </IconButton>

    <IconButton variant="Surface">
      <Icon src={Icons.Smile} />
    </IconButton>

    <IconButton variant="SurfaceVariant">
      <Icon src={Icons.Smile} />
    </IconButton>

    <IconButton variant="Primary">
      <Icon src={Icons.Smile} />
    </IconButton>

    <IconButton variant="Secondary">
      <Icon src={Icons.Smile} />
    </IconButton>

    <IconButton variant="Success">
      <Icon src={Icons.Smile} />
    </IconButton>

    <IconButton variant="Warning">
      <Icon src={Icons.Smile} />
    </IconButton>

    <IconButton variant="Critical">
      <Icon src={Icons.Smile} />
    </IconButton>
  </Box>
);

export const IconButton300 = () => (
  <Box css={{ d: "flex", alI: "start", fxW: "wrap", gap: "$400" }}>
    <IconButton size="300" variant="Background">
      <Icon src={Icons.Smile} />
    </IconButton>

    <IconButton size="300" variant="Surface">
      <Icon src={Icons.Smile} />
    </IconButton>

    <IconButton size="300" variant="SurfaceVariant">
      <Icon src={Icons.Smile} />
    </IconButton>

    <IconButton size="300" variant="Primary">
      <Icon src={Icons.Smile} />
    </IconButton>

    <IconButton size="300" variant="Secondary">
      <Icon src={Icons.Smile} />
    </IconButton>

    <IconButton size="300" variant="Success">
      <Icon src={Icons.Smile} />
    </IconButton>

    <IconButton size="300" variant="Warning">
      <Icon src={Icons.Smile} />
    </IconButton>

    <IconButton size="300" variant="Critical">
      <Icon src={Icons.Smile} />
    </IconButton>
  </Box>
);
