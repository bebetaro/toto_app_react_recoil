// import { State, Store } from '@sambego/storybook-state'
// import { action } from '@storybook/addon-actions'

import React from "react";
import { RecoilRoot } from "recoil";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Form, Props } from ".";
import stories from "./test.stories.css";

export default {
  title: __dirname,
  component: Form,
  decorators: [
    (storyFn) => (
      <RecoilRoot>
        <div className={stories.frame}>{storyFn()}</div>
      </RecoilRoot>
    ),
  ],
} as Meta;

const Template: Story<Props> = (args) => <Form {...args} />;

export const Component = Template.bind({});
Component.args = {
  label: "Name",
  atomKey: "test",
};
