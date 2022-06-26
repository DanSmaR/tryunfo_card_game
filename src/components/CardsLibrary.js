import React from 'react';
import Card from './Card';

export default function CardsLibrary(props) {
  const { cards, nameFilter, rareFilter, trunfoFilter, onDeleteCards } = props;

  return (
    <>
      <h2>Todas as Cartas</h2>
      <div className="cards-wrapper">
        {
          cards
            .filter((card) => {
              if (trunfoFilter) {
                return card.cardTrunfo === trunfoFilter;
              }
              return true;
            })
            .filter((card) => {
              if (!nameFilter) return true;
              return card.cardName.includes(nameFilter);
            })
            .filter((card) => {
              if (rareFilter === 'todas') return true;
              return card.cardRare === rareFilter;
            })
            .map((card) => (
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
