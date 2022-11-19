import React from "react";
import { ComponentMeta } from "@storybook/react";
import { Button } from "../button";
import { Text } from "../text";
import { Tooltip } from "../tooltip";
import { PopOut } from "./PopOut";
import { Box } from "../box";

export default {
  title: "PopOut",
  component: PopOut,
} as ComponentMeta<typeof PopOut>;

export const Interactive = () => (
  <Box css={{ height: "100vh" }}>
    <PopOut
      content={
        <Tooltip>
          <Text truncate size="T300">
            PopOut
          </Text>
        </Tooltip>
      }
    >
      {(ref, open, toggleOpen) => (
        <Button type="button" onClick={() => toggleOpen()} ref={ref}>
          {open ? "Close" : "Open"}
        </Button>
      )}
    </PopOut>
  </Box>
);
