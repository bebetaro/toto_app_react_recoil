// import { State, Store } from '@sambego/storybook-state'
// import { action } from '@storybook/addon-actions'

import React from "react";
import { RecoilRoot } from "recoil";
import { Story, Meta } from "@storybook/react/types-6-0";
import { InputForm, Props } from ".";
import stories from "./test.stories.css";

export default {
  title: __dirname,
  component: InputForm,
  decorators: [
    (storyFn) => (
      <RecoilRoot>
        <div className={stories.frame}>{storyFn()}</div>
      </RecoilRoot>
    ),
  ],
} as Meta;

const Template: Story<Props> = (args) => <InputForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  atomKey: "test",
};
