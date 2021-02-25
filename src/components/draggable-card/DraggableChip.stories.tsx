import React from 'react';
// import { IRenderChipProps } from '@material-ui/core';
import { Meta, Story } from '@storybook/react/types-6-0';
import { DraggableChip, RenderDraggableChipProps } from './DraggableChip';

export default {
  title: 'Components/DraggableChip',
  component: DraggableChip
} as Meta;

const Template: Story<RenderDraggableChipProps> = args => <DraggableChip {...args} />;

export const DraggableChipStandard = Template.bind({});
DraggableChipStandard.args = {
  className: 'default',
  text: 'test'
};
