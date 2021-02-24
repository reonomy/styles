import React from 'react';
// import { IRenderChipProps } from '@material-ui/core';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Chip, IRenderChipProps } from '.';

export default {
  title: 'Components/Chip',
  component: Chip
} as Meta;

const Template: Story<IRenderChipProps> = args => <Chip {...args} />;

export const ChipStandard = Template.bind({});
ChipStandard.args = {
  className: 'default',
  text: 'test'
};
