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

import {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ElementType,
  PropsWithChildren,
} from "react";

export type MainColor = "Primary" | "Secondary" | "Success" | "Warning" | "Critical";

export type ContainerColor =
  | "Background"
  | "Surface"
  | "SurfaceVariant"
  | "Primary"
  | "Secondary"
  | "Success"
  | "Warning"
  | "Critical";

export type RefOfType<E extends ElementType> = ComponentPropsWithRef<E>["ref"];

export type AsProp<E extends ElementType> = {
  as?: E;
};

export type AsInProps<E extends ElementType, ExtraProps = object> = Omit<
  PropsWithChildren<ComponentPropsWithoutRef<E>>,
  keyof ExtraProps | keyof AsProp<ElementType>
> &
  ExtraProps &
  AsProp<E>;

export type AsOutProps<E extends ElementType, ExtraProps = object> = Omit<
  PropsWithChildren<ComponentPropsWithRef<E>>,
  keyof ExtraProps | keyof AsProp<ElementType>
> &
  ExtraProps &
  AsProp<E>;
