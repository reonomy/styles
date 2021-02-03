import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import ReonomyTheme from '../theme';
import { GreyGroup, LabelsGroup } from './groups';

export default {
  title: 'Colors/Groups'
} as Meta;

export const Greys = () => <GreyGroup color={ReonomyTheme.palette.grey} />;
export const Labels = () => <LabelsGroup color={ReonomyTheme.palette.labels} />;
