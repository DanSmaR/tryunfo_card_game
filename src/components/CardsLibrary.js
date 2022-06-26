import React from 'react';
import Card from './Card';

export default function CardsLibrary(props) {
  const { cards, onDeleteCards } = props;

  return (
    <>
      <h2>Todas as Cartas</h2>
      <div className="cards-wrapper">
        {
          cards.map((card) => (
            <div className="card_wrapper" key={ card.cardName }>
              <Card { ...card } key={ card.cardName } />
              <button
                type="button"
                data-testid="delete-button"
                onClick={ onDeleteCards.bind(this, card.cardName, card.cardTrunfo) }
              >
                Excluir
              </button>
            </div>
          ))
        }
      </div>
    </>
  );
}
