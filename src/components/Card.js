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

  const defaultDescription = `Lorem ipsum dolor sit amet, 
  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
  labore et dolore magna aliqua. Tempus urna et pharetra pharetra.`;

  return (
    <article className="card position-relative">
      <h3 className="card__title" data-testid="name-card">
        { !cardName ? 'Nome da Carta' : cardName }
      </h3>
      <img
        className="card__image card-image"
        src={ `../images/${!cardImage ? 'image' : cardImage}.png` }
        alt={ !cardName ? 'No loaded image' : cardName }
        data-testid="image-card"
        width="100%"
        height="250px"
      />
      <p className="card__description card-text" data-testid="description-card">
        { !cardDescription ? defaultDescription : cardDescription }
      </p>
      <ul className="card__attributes list-group list-group-flush">
        <li data-testid="attr1-card" className="list-group-item">
          Attributo 1
          <div className="progress" style={ { height: '3em' } }>
            <div
              className="progress-bar bg-info"
              role="progressbar"
              style={ { width: `${parseInt(cardAttr1, 10)}%` } }
              aria-valuenow={ cardAttr1 }
              aria-valuemin="0"
              aria-valuemax="90"
              aria-label="progress-bar"
            />
          </div>
          <span className="input-group-text">{ cardAttr1 }</span>
        </li>
        <li data-testid="attr2-card" className="list-group-item">
          Attributo 2
          <div className="progress" style={ { height: '3em' } }>
            <div
              className="progress-bar bg-info"
              role="progressbar"
              style={ { width: `${parseInt(cardAttr2, 10)}%` } }
              aria-valuenow={ cardAttr2 }
              aria-valuemin="0"
              aria-valuemax="90"
              aria-label="progress-bar"
            />
          </div>
          <span className="input-group-text">{ cardAttr2 }</span>
        </li>
        <li data-testid="attr3-card" className="list-group-item">
          Attributo 3
          <div className="progress" style={ { height: '3em' } }>
            <div
              className="progress-bar bg-info"
              role="progressbar"
              style={ { width: `${parseInt(cardAttr3, 10)}%` } }
              aria-valuenow={ cardAttr3 }
              aria-valuemin="0"
              aria-valuemax="90"
              aria-label="progress-bar"
            />
          </div>
          <span className="input-group-text">{ cardAttr3 }</span>
        </li>
      </ul>
      <p
        className="card__rare-info position-absolute end-0 badge text-bg-info"
        data-testid="rare-card"
      >
        { cardRare }
      </p>
      {
        cardTrunfo
        && (
          <p
            className="card__trunfo position-absolute end-0 badge text-bg-warning"
            data-testid="trunfo-card"
          >
            Super Trunfo
          </p>
        )
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
