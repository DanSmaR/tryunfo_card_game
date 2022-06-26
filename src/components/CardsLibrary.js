import React from 'react';
import Card from './Card';

export default function CardsLibrary(props) {
  const { cards } = props;

  return (
    <>
      <h2>Todas as Cartas</h2>
      <div className="cards-wrapper">
        {
          cards.map((card) => (
            <Card { ...card } key={ card.cardName } />
          ))
        }
      </div>
    </>
  );
}
