import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Text } from '.';

export default {
  title: 'Components/Text',
  component: Text
} as Meta;

export const Huge = () => <Text variant="huge">Huge</Text>;
export const H1 = () => <Text variant="h1">h1</Text>;
export const H2 = () => <Text variant="h2">h2</Text>;
export const H3 = () => <Text variant="h3">h3</Text>;
export const H4 = () => <Text variant="h4">h4</Text>;
export const H5 = () => <Text variant="h5">h5</Text>;
export const H6 = () => <Text variant="h6">h6</Text>;
export const Subtitle1 = () => <Text variant="subtitle1">Subtitle 1</Text>;
export const Subtitle2 = () => <Text variant="subtitle2">Subtitle 2</Text>;
export const Body1 = () => (
  <Text variant="body1" gutterLeft>
    Body 1
  </Text>
);
export const Body2 = () => <Text variant="body2">Body 2</Text>;
export const Overline = () => <Text variant="overline">overline</Text>;
export const Code = () => <Text variant="code">code</Text>;
