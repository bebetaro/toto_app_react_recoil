// import { State, Store } from '@sambego/storybook-state'
// import { action } from '@storybook/addon-actions'

import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Back } from ".";
import stories from "./test.stories.css";

export default {
  title: __dirname,
  component: Back,
  decorators: [
    (storyFn) => (
      <>
        <div className={stories.frame}>{storyFn()}</div>
      </>
    ),
  ],
} as Meta;

const Template: Story = (args) => <Back {...args} />;

export const Component = Template.bind({});
