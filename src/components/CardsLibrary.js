import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

export default function CardsLibrary(props) {
  const { cards, nameFilter, rareFilter, trunfoFilter, onDeleteCards } = props;

  return (
    <article className="cards-box">
      <h2 className="cards-box__title">Todas as Cartas</h2>
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
              <div className="card-wrapper" key={ card.cardName }>
                <Card { ...card } key={ card.cardName } />
                <button
                  className="btn btn-danger"
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
    </article>
  );
}

CardsLibrary.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
  nameFilter: PropTypes.string.isRequired,
  rareFilter: PropTypes.string.isRequired,
  trunfoFilter: PropTypes.bool.isRequired,
  onDeleteCards: PropTypes.func.isRequired,
};
