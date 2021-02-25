import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DraggableContainer } from './DraggableContainer';

export default {
  title: 'Components/DraggableContainer'
} as Meta;

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

export const DraggableContainerComponent = () => (
  <DndProvider backend={HTML5Backend}>
    <DraggableContainer
      initialCards={mockCards}
      updateCards={updatedCards => {
        console.log(updatedCards);
      }}
    />
  </DndProvider>
);
