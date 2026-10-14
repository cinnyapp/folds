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

import { ElementType, forwardRef, ReactElement } from "react";
import { AsInProps, AsOutProps, RefOfType } from "./types";

export const as = <DefaultType extends ElementType, ExtraProps = object>(
  fc: (
    props: AsInProps<DefaultType, ExtraProps>,
    ref: RefOfType<DefaultType>
  ) => ReactElement | null
) =>
  forwardRef(fc) as unknown as <T extends ElementType = DefaultType>(
    props: AsOutProps<T, ExtraProps>
  ) => ReturnType<typeof fc>;
