import React from 'react';
import { CheckboxProps } from '@material-ui/core';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Checkbox } from '.';
import ReonomyStyles from '../..';

export default {
  title: 'Components/Checkbox',
  component: Checkbox
} as Meta;

const Template: Story<CheckboxProps> = args => (
  <ReonomyStyles>
    <Checkbox {...args} />
  </ReonomyStyles>
);

export const Checked = Template.bind({});
Checked.args = {
  checked: true
};

export const Unchecked = Template.bind({});
Unchecked.args = {
  checked: false
};
