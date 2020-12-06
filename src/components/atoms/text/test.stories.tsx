// import { State, Store } from '@sambego/storybook-state'
// import { action } from '@storybook/addon-actions'

import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Text, Props } from ".";
import stories from "./test.stories.css";

export default {
  title: __dirname,
  component: Text,
  decorators: [
    (storyFn) => (
      <>
        <div className={stories.frame}>{storyFn()}</div>
      </>
    ),
  ],
} as Meta;

type FCProps = Props & { children: React.ReactNode };

const Template: Story<FCProps> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Test",
  size: "small",
  color: "black",
};
