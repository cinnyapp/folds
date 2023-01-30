import "@fontsource/inter/variable.css";
import classNames from "classnames";
import { lightTheme, configClass, config, varsClass } from "../src";

export const baseDecorator = (Story) => (
  <div
    id="folds-root"
    className={classNames(lightTheme, configClass, varsClass)}
    style={{ fontFamily: config.font.Inter }}
  >
    <Story />
  </div>
);
