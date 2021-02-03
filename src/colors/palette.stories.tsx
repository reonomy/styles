import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import ReonomyTheme from '../theme';
import { Palette } from './palette';

export default {
  title: 'Colors/Palette'
} as Meta;

export const Primary = () => <Palette color={ReonomyTheme.palette.primary} />;
export const Secondary = () => <Palette color={ReonomyTheme.palette.secondary} />;
export const Tertiary = () => <Palette color={ReonomyTheme.palette.tertiary} />;
export const Success = () => <Palette color={ReonomyTheme.palette.success} />;
export const Warning = () => <Palette color={ReonomyTheme.palette.warning} />;
export const Error = () => <Palette color={ReonomyTheme.palette.error} />;
export const Accent = () => <Palette color={ReonomyTheme.palette.accent} />;
