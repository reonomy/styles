import { ButtonTypeMap } from '@material-ui/core/Button/Button';
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

type DefaultButtonPropType = ButtonProps<ButtonTypeMap['defaultComponent']>;

const Template: Story<DefaultButtonPropType> = args => (
  <ReonomyStyles>
    <ReonomyButton {...args}>Button</ReonomyButton>
  </ReonomyStyles>
);

const TemplateWithIcons: Story<DefaultButtonPropType> = args => (
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

const TemplateWithPopover: Story<DefaultButtonPropType> = args => {
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
        <TextComponent gutters>I am anchored to the above button's bottom left corner</TextComponent>
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
