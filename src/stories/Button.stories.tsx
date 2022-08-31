import { ThemeProvider } from "styled-components";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "../components/Button";
import light from "../styles/themes/light";

export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <ThemeProvider theme={light}>
    <Button {...args}>Button</Button>
  </ThemeProvider>
);

export const Simple = Template.bind({});
Simple.args = {
  variant: "primary",
};
