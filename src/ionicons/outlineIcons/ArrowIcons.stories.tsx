import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { SvgIconProps } from '@material-ui/core';
import {
  IconArrowDownOutline as IconArrowDownOutlineAlias,
  IconArrowUpOutline as IconArrowUpOutlineAlias,
  IconArrowBackOutline as IconArrowBackOutlineAlias,
  IconArrowForwardOutline as IconArrowForwardOutlineAlias
} from './ArrowIcons';

export default {
  title: 'Icons/ArrowIcons',
  subcomponents: {
    IconArrowDownOutlineAlias,
    IconArrowUpOutlineAlias,
    IconArrowBackOutlineAlias,
    IconArrowForwardOutlineAlias
  }
} as Meta;

export const IconArrowDownOutline = () => <IconArrowDownOutlineAlias />;

export const IconArrowUpOutline = () => <IconArrowUpOutlineAlias />;

export const IconArrowBackOutline = () => <IconArrowBackOutlineAlias />;

export const IconArrowForwardOutline = () => <IconArrowForwardOutlineAlias />;
