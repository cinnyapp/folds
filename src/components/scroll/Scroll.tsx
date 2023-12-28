import React, { useLayoutEffect, useRef } from "react";
import classNames from "classnames";
import * as css from "./Scroll.css";
import { as } from "../as";

export const Scroll = as<"div", css.ScrollVariants>(
  (
    { as: AsScroll = "div", className, variant, visibility, hideTrack, size, direction, ...props },
    ref
  ) => {
    const scrollLocalRef = useRef<HTMLDivElement>();

    useLayoutEffect(() => {
      if (scrollLocalRef.current) {
        const $scroll = scrollLocalRef.current;
        if (size === "0") {
          $scroll.setAttribute("data-x-scrollbar-width", "0");
          $scroll.setAttribute("data-y-scrollbar-width", "0");
        } else {
          const xScrollbarWidth = $scroll.offsetHeight - $scroll.clientHeight;
          const yScrollbarWidth = $scroll.offsetWidth - $scroll.clientWidth;

          $scroll.setAttribute("data-x-scrollbar-width", `${xScrollbarWidth}`);
          $scroll.setAttribute("data-y-scrollbar-width", `${yScrollbarWidth}`);
        }
      }
    }, [size]);

    return (
      <AsScroll
        className={classNames(
          css.Scroll({
            variant,
            visibility,
            hideTrack,
            size,
            direction,
          }),
          className
        )}
        {...props}
        ref={(r) => {
          if (r) scrollLocalRef.current = r;
          if (ref) {
            if ("current" in ref) {
              const propRef: any = ref;
              propRef.current = r;
            }
            if (typeof ref === "function") {
              ref(r);
            }
          }
        }}
      />
    );
  }
);
