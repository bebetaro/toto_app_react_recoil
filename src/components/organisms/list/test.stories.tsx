// import { State, Store } from '@sambego/storybook-state'
// import { action } from '@storybook/addon-actions'

import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { List, Props } from ".";
import stories from "./test.stories.css";

const sampleData: Props["data"] = Array(100)
  .fill(0)
  .map((_, index) => {
    return {
      id: String(index),
      taskName: `Task ${index}`,
      deadline: "2020-12-20",
    };
  });

export default {
  title: __dirname,
  component: List,
  decorators: [
    (storyFn) => (
      <>
        <div className={stories.frame}>{storyFn()}</div>
      </>
    ),
  ],
} as Meta;

const Template: Story<Props> = (args) => <List {...args} />;

export const Component = Template.bind({});
Component.args = {
  data: sampleData,
};
