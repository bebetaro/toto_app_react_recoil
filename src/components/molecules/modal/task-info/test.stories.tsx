// import { State, Store } from '@sambego/storybook-state'
import { action } from "@storybook/addon-actions";

import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { TaskInfo, Props } from ".";
import stories from "./test.stories.css";
import { Modal } from "../modal";

export default {
  title: __dirname,
  component: TaskInfo,
  decorators: [
    (storyFn) => (
      <>
        <div className={stories.frame}>{storyFn()}</div>
      </>
    ),
  ],
} as Meta;
const dummy = () => action("close modal");
const Template: Story<Props> = (args) => (
  <Modal isOpen={true} onCloseModal={dummy}>
    <TaskInfo {...args} />
  </Modal>
);

export const Component = Template.bind({});
Component.args = {
  taskName: "something task",
  deadline: "2020-12-07",
};
