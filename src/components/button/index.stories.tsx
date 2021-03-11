import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import Grid from '@material-ui/core/Grid';
import { Button as ReonomyButton, ButtonProps } from '.';
import ReonomyStyles, { IconArrowBackSolid, IconArrowForwardSolid } from '../..';

export default {
  title: 'Components/Button',
  component: ReonomyButton
} as Meta;

function Button({ children, ...props }: { children: React.ReactNode } & ButtonProps) {
  return (
    <ReonomyStyles>
      <ReonomyButton {...props}>{children}</ReonomyButton>
    </ReonomyStyles>
  );
}

export const Contained = () => (
  <Grid container spacing={3}>
    {(['huge', 'large', 'medium', 'small'] as Array<'huge' | 'large' | 'medium' | 'small'>).map(size => (
      <Grid key={size} item>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Button size={size} variant="contained" color="primary">
              Primary
            </Button>
          </Grid>
          <Grid item>
            <Button size={size} variant="contained" color="secondary">
              Secondary
            </Button>
          </Grid>
          <Grid item>
            <Button size={size} variant="contained" color="tertiary">
              Tertiary
            </Button>
          </Grid>
          <Grid item>
            <Button size={size} variant="contained" color="success">
              Success
            </Button>
          </Grid>
          <Grid item>
            <Button size={size} variant="contained" disabled>
              Disabled
            </Button>
          </Grid>
        </Grid>
      </Grid>
    ))}
  </Grid>
);

export const Outlined = () => (
  <Grid container spacing={3}>
    {(['huge', 'large', 'medium', 'small'] as Array<'huge' | 'large' | 'medium' | 'small'>).map(size => (
      <Grid key={size} item>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Button size={size} variant="outlined" color="primary">
              Primary
            </Button>
          </Grid>
          <Grid item>
            <Button size={size} variant="outlined" color="secondary">
              Secondary
            </Button>
          </Grid>
          <Grid item>
            <Button size={size} variant="outlined" color="tertiary">
              Tertiary
            </Button>
          </Grid>
          <Grid item>
            <Button size={size} variant="outlined" color="success">
              Success
            </Button>
          </Grid>
          <Grid item>
            <Button size={size} variant="outlined" disabled>
              Disabled
            </Button>
          </Grid>
        </Grid>
      </Grid>
    ))}
  </Grid>
);

export const Text = () => (
  <Grid container spacing={3}>
    {(['huge', 'large', 'medium', 'small'] as Array<'huge' | 'large' | 'medium' | 'small'>).map(size => (
      <Grid key={size} item>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Button size={size} color="primary">
              Primary
            </Button>
          </Grid>
          <Grid item>
            <Button size={size} color="secondary">
              Secondary
            </Button>
          </Grid>
          <Grid item>
            <Button size={size} color="tertiary">
              Tertiary
            </Button>
          </Grid>
          <Grid item>
            <Button size={size} color="success">
              Success
            </Button>
          </Grid>
          <Grid item>
            <Button size={size} disabled>
              Disabled
            </Button>
          </Grid>
          <Grid item>
            <Button size={size} startIcon={<IconArrowBackSolid />}>
              Left Icon
            </Button>
          </Grid>
          <Grid item>
            <Button size={size} endIcon={<IconArrowForwardSolid />}>
              Right Icon
            </Button>
          </Grid>
        </Grid>
      </Grid>
    ))}
  </Grid>
);
