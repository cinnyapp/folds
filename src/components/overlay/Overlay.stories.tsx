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

import React, { useState } from "react";
import { ComponentMeta } from "@storybook/react";
import { Overlay, OverlayBackdrop, OverlayCenter } from "./Overlay";
import { Tooltip } from "../tooltip";
import { Text } from "../text";
import { Icon, Icons } from "../icon";
import { IconButton } from "../icon-button";

export default {
  title: "Overlay",
  component: Overlay,
} as ComponentMeta<typeof Overlay>;

export const Surface = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <IconButton variant="SurfaceVariant" onClick={() => setOpen(!open)}>
        <Icon src={Icons.VerticalDots} />
      </IconButton>
      <Overlay style={{ padding: "4px" }} open={open} backdrop={<OverlayBackdrop />}>
        <OverlayCenter onClick={() => setOpen(false)}>
          <Tooltip>
            <Text truncate size="T300">
              Hello
            </Text>
          </Tooltip>
        </OverlayCenter>
      </Overlay>
    </>
  );
};
