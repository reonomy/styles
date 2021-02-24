import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ReonomyTheme from '../../theme';
import { Card } from './DraggableCard';
import { Container } from './DraggableContainer';
// import { GreyGroup, LabelsGroup } from './groups';

export default {
  title: 'Components/DraggableContainer'
} as Meta;

// export const Greys = () => <GreyGroup color={ReonomyTheme.palette.grey} />;
// export const Labels = () => <LabelsGroup color={ReonomyTheme.palette.labels} />;
const mockCards = [
  {
    id: 1,
    text: 'Write a cool JS library'
  },
  {
    id: 2,
    text: 'Make it generic enough'
  },
  {
    id: 3,
    text: 'Write README'
  },
  {
    id: 4,
    text: 'Create some examples'
  },
  {
    id: 5,
    text: 'Spam in Twitter and IRC to promote it (note that this element is taller than the others)'
  },
  {
    id: 6,
    text: '???'
  },
  {
    id: 7,
    text: 'PROFIT'
  }
];

export const DraggableContainer = () => (
  <DndProvider backend={HTML5Backend}>
    <Container initialCards={mockCards} />
  </DndProvider>
);
