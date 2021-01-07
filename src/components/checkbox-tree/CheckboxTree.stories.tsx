import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import CheckboxTree, { CheckboxTreeProps } from './CheckboxTree';

export default {
  title: 'Components/CheckboxTree',
  component: CheckboxTree
} as Meta;

const Template: Story<CheckboxTreeProps> = args => <CheckboxTree {...args} />;

export const Checked = Template.bind({});
Checked.args = {
  data: {
    id: '1',
    label: 'one',
    checked: false,
    children: [
      {
        id: '2',
        label: 'two',
        checked: true
      }
    ]
  }
};

// export const Unchecked = Template.bind({});
// Unchecked.args = {
//   checked: false
// };
