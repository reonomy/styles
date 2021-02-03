import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import ReonomyTheme from '../theme';
import { Text } from './text';

export default {
  title: 'Colors/Text'
} as Meta;

export const Primary = () => <Text name="primary" color={ReonomyTheme.palette.text.primary} />;
export const Secondary = () => <Text name="secondary" color={ReonomyTheme.palette.text.secondary} />;
export const Disabled = () => <Text name="disabled" color={ReonomyTheme.palette.text.disabled} />;
export const Hint = () => <Text name="hint" color={ReonomyTheme.palette.text.hint} />;
