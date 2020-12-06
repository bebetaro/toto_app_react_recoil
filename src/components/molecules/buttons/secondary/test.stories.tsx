// import { State, Store } from '@sambego/storybook-state'
// import { action } from '@storybook/addon-actions'

import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Secondary, Props } from ".";
import stories from "./test.stories.css";

export default {
  title: __dirname,
  component: Secondary,
  decorators: [
    (storyFn) => (
      <>
        <div className={stories.frame}>{storyFn()}</div>
      </>
    ),
  ],
} as Meta;

type FCProps = Props & { children: React.ReactNode };

const Template: Story<FCProps> = (args) => <Secondary {...args} />;

export const Component = Template.bind({});
Component.args = {
  children: "Button",
};
