import "@fontsource-variable/inter";
import { lightTheme, configClass, config, varsClass } from "../src";

export const baseDecorator = (Story) => {
  document.body.classList.add(lightTheme, configClass, varsClass);
  document.body.style.fontFamily = config.font.Inter;

  return <Story />;
};
