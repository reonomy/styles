import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Button as ReonomyButton, ButtonProps } from '.';
import ReonomyStyles, { IconArrowBackSolid, IconArrowForwardSolid } from '../..';

export default {
  title: 'Components/Button',
  component: ReonomyButton
} as Meta;

const Template: Story<ButtonProps> = args => (
  <ReonomyStyles>
    <ReonomyButton {...args}>Button</ReonomyButton>
  </ReonomyStyles>
);

export const Contained = Template.bind({});
Contained.args = {
  variant: 'contained',
  color: 'primary',
  size: 'medium',
  margin: 0
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined',
  color: 'primary',
  size: 'medium',
  margin: 0
};

export const Text = Template.bind({});
Text.args = {
  variant: 'text',
  color: 'primary',
  size: 'medium',
  margin: 0
};
