import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Button, Props } from ".";
import stories from "./test.stories.css";

export default {
  title: __dirname,
  component: Button,
  decorators: [
    (storyFn) => (
      <>
        <div className={stories.frame}>{storyFn()}</div>
      </>
    ),
  ],
} as Meta;

type FCprops = Props & { children: React.ReactNode };

const Template: Story<FCprops> = (args) => <Button {...args} />;

export const Component = Template.bind({});
Component.args = {
  children: "Button",
};
