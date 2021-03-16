import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { ButtonTypeMap } from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
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
        <TextComponent gutters>I am anchored to the above button&apos;s bottom left corner</TextComponent>
      </Popover>
    </>
  );
};

export const AllButtons = () => (
  <ReonomyStyles>
    <Grid container spacing={3}>
      {['huge', 'large', 'medium', 'small'].map(size => (
        <Grid key={size} item>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <ReonomyButton size={size} variant="contained" color="primary">
                Button
              </ReonomyButton>
            </Grid>
            <Grid item>
              <ReonomyButton size={size} variant="contained" color="secondary">
                Button
              </ReonomyButton>
            </Grid>
            <Grid item>
              <ReonomyButton size={size} variant="contained" color="tertiary">
                Button
              </ReonomyButton>
            </Grid>
            <Grid item>
              <ReonomyButton size={size} variant="contained" color="success">
                Button
              </ReonomyButton>
            </Grid>
            <Grid item>
              <ReonomyButton size={size} variant="contained" disabled>
                Button
              </ReonomyButton>
            </Grid>
            <Grid item>
              <ReonomyButton size={size} variant="outlined" color="primary">
                Button
              </ReonomyButton>
            </Grid>
            <Grid item>
              <ReonomyButton size={size} variant="outlined" color="secondary">
                Button
              </ReonomyButton>
            </Grid>
            <Grid item>
              <ReonomyButton size={size} variant="outlined" color="tertiary">
                Button
              </ReonomyButton>
            </Grid>
            <Grid item>
              <ReonomyButton size={size} variant="outlined" color="success">
                Button
              </ReonomyButton>
            </Grid>
            <Grid item>
              <ReonomyButton size={size} variant="outlined" disabled>
                Button
              </ReonomyButton>
            </Grid>
            <Grid item>
              <ReonomyButton size={size} color="primary">
                Button
              </ReonomyButton>
            </Grid>
            <Grid item>
              <ReonomyButton size={size} color="secondary">
                Button
              </ReonomyButton>
            </Grid>
            <Grid item>
              <ReonomyButton size={size} color="tertiary">
                Button
              </ReonomyButton>
            </Grid>
            <Grid item>
              <ReonomyButton size={size} color="success">
                Button
              </ReonomyButton>
            </Grid>
            <Grid item>
              <ReonomyButton size={size} disabled>
                Button
              </ReonomyButton>
            </Grid>
            <Grid item>
              <ReonomyButton size={size} startIcon={<IconArrowBackSolid />}>
                Button
              </ReonomyButton>
            </Grid>
            <Grid item>
              <ReonomyButton size={size} endIcon={<IconArrowForwardSolid />}>
                Button
              </ReonomyButton>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Grid>
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
