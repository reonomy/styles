import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { CheckboxTree, CheckboxTreeProps, TreeData } from './CheckboxTree';

export default {
  title: 'Components/CheckboxTree',
  component: CheckboxTree
} as Meta;

const Template: Story<CheckboxTreeProps> = args => <CheckboxTree {...args} />;

export const AllChecked = Template.bind({});
AllChecked.args = {
  data: {
    name: '1',
    label: 'one',
    checked: null,
    children: [
      {
        name: '2',
        label: 'two',
        checked: true
      },
      {
        name: '3',
        label: 'three',
        checked: true
      }
    ]
  },
  open: true,
  onUpdate: (data: TreeData) => {
    console.log('new data >>', data);
  }
};

export const AtLeastOneChildChecked = Template.bind({});
AtLeastOneChildChecked.args = {
  data: {
    name: '1',
    label: 'one',
    checked: null,
    children: [
      {
        name: '2',
        label: 'two',
        checked: false
      },
      {
        name: '3',
        label: 'three',
        checked: true
      }
    ]
  },
  open: true,
  onUpdate: (data: TreeData) => {
    console.log('new data >>', data);
  }
};

export const AllUnchecked = Template.bind({});
AllUnchecked.args = {
  data: {
    name: '1',
    label: 'one',
    checked: null,
    children: [
      {
        name: '2',
        label: 'two',
        checked: false
      },
      {
        name: '3',
        label: 'three',
        checked: false
      }
    ]
  },
  open: true,
  onUpdate: (data: TreeData) => {
    console.log('new data >>', data);
  }
};

export const WithRootLevelClosed = Template.bind({});
WithRootLevelClosed.args = {
  data: {
    name: '1',
    label: 'one',
    checked: null,
    children: [
      {
        name: '2',
        label: 'two',
        checked: false
      },
      {
        name: '3',
        label: 'three',
        checked: false
      }
    ]
  },
  open: false,
  onUpdate: (data: TreeData) => {
    console.log('new data >>', data);
  }
};
