import { Typography } from '@material-ui/core';
import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Popover from '@material-ui/core/Popover';
import { Button as ReonomyButton, ButtonProps } from '.';
import { Text as TextComponent } from '../text';
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

const TemplateWithIcons: Story<ButtonProps> = args => (
  <ReonomyStyles>
    <>
      <ReonomyButton {...args} startIcon={<IconArrowBackSolid />}>
        Left Icon
      </ReonomyButton>
      <ReonomyButton {...args} endIcon={<IconArrowForwardSolid />}>
        Right Icon
      </ReonomyButton>
    </>
  </ReonomyStyles>
);

const TemplateWithPopover: Story<ButtonProps> = args => {
  const anchor = React.useRef(null);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <>
      <ReonomyStyles>
        <ReonomyButton {...args} ref={anchor} onClick={() => setIsOpen(true)}>
          Click to open popover
        </ReonomyButton>
      </ReonomyStyles>
      <Popover
        open={isOpen}
        onClose={() => setIsOpen(false)}
        anchorEl={anchor.current}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
        <TextComponent gutters>This is a popover anchored to the button</TextComponent>
      </Popover>
    </>
  );
};

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

export const WithIcons = TemplateWithIcons.bind({});
WithIcons.args = {
  variant: 'text',
  color: 'primary',
  size: 'medium',
  margin: 0
};

export const WithAnchoredPopover = TemplateWithPopover.bind({});
WithAnchoredPopover.args = {
  variant: 'text',
  color: 'primary',
  size: 'medium',
  margin: 0
};
