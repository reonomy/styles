import React, { FC, useState, useCallback } from 'react';
import update from 'immutability-helper';
import { Card, CardProps } from './DraggableCard';

const style = {
  width: 200
};

export interface Item {
  id: number;
  text: string;
}

export interface ContainerState {
  initialCards: Item[];
}

export const Container: FC<ContainerState> = ({ initialCards }: ContainerState) => {
  const [cards, setCards] = useState(initialCards);

  const moveCard = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      const dragCard = cards[dragIndex];
      setCards(
        update(cards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragCard]
          ]
        })
      );
    },
    [cards]
  );

  const renderCard = (card: { id: number; text: string }, index: number) => {
    return <Card key={card.id} index={index} id={card.id} text={card.text} moveCard={moveCard} />;
  };

  return (
    <>
      <div style={style}>{cards.map((card, i) => renderCard(card, i))}</div>
    </>
  );
};
