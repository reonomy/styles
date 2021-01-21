import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { CheckboxTree, CheckboxTreeProps } from './CheckboxTree';

export default {
  title: 'Components/CheckboxTree',
  component: CheckboxTree
} as Meta;

const Template: Story<CheckboxTreeProps> = args => <CheckboxTree {...args} />;

export const AllChecked = Template.bind({});
AllChecked.args = {
  data: {
    id: '1',
    label: 'one',
    checked: null,
    children: [
      {
        id: '2',
        label: 'two',
        checked: true
      },
      {
        id: '3',
        label: 'three',
        checked: true
      }
    ]
  },
  open: true
};

export const AtLeastOneChildChecked = Template.bind({});
AtLeastOneChildChecked.args = {
  data: {
    id: '1',
    label: 'one',
    checked: null,
    children: [
      {
        id: '2',
        label: 'two',
        checked: false
      },
      {
        id: '3',
        label: 'three',
        checked: true
      }
    ]
  },
  open: true
};

export const AllUnchecked = Template.bind({});
AllUnchecked.args = {
  data: {
    id: '1',
    label: 'one',
    checked: null,
    children: [
      {
        id: '2',
        label: 'two',
        checked: false
      },
      {
        id: '3',
        label: 'three',
        checked: false
      }
    ]
  },
  open: true
};

export const WithRootLevelClosed = Template.bind({});
WithRootLevelClosed.args = {
  data: {
    id: '1',
    label: 'one',
    checked: null,
    children: [
      {
        id: '2',
        label: 'two',
        checked: false
      },
      {
        id: '3',
        label: 'three',
        checked: false
      }
    ]
  },
  open: false
};
