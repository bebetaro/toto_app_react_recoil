// import { State, Store } from '@sambego/storybook-state'
// import { action } from '@storybook/addon-actions'

import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Row, Props } from ".";
import stories from "./test.stories.css";

export default {
  title: __dirname,
  component: Row,
  decorators: [
    (storyFn) => (
      <>
        <div className={stories.frame}>{storyFn()}</div>
      </>
    ),
  ],
} as Meta;

const Template: Story<Props> = (args) => <Row {...args} />;

export const Component = Template.bind({});
Component.args = {
  taskName: "this is something test",
  deadline: "2020-12-05",
};
