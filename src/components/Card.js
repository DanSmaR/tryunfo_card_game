import React from 'react';
import PropTypes from 'prop-types';

function Card(props) {
  const {
    cardName,
    cardDescription,
    cardAttr1,
    cardAttr2,
    cardAttr3,
    cardImage,
    cardRare,
    cardTrunfo,
  } = props;

  return (
    <article className="card">
      <h3 className="card__title" data-testid="name-card">
        { cardName }
      </h3>
      <img
        className="card__image"
        src={ cardImage }
        alt={ cardName }
        data-testid="image-card"
      />
      <p className="card__description" data-testid="description-card">
        { cardDescription }
      </p>
      <ul className="card_attributes">
        <li data-testid="attr1-card">
          { cardAttr1 }
        </li>
        <li data-testid="attr2-card">
          { cardAttr2 }
        </li>
        <li data-testid="attr3-card">
          { cardAttr3 }
        </li>
      </ul>
      <p className="card__rare-info" data-testid="rare-card">
        { cardRare }
      </p>
      {
        cardTrunfo
        && <p className="card__trunfo" data-testid="trunfo-card">Super Trunfo</p>
      }
    </article>
  );
}

export default Card;

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};
