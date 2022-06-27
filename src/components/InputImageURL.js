import React from 'react';
import PropTypes from 'prop-types';

export default function InputImageURL(props) {
  const { cardImage, onInputChange } = props;
  return (
    <p>
      <label htmlFor="cardImage">
        Imagem
        <input
          type="text"
          id="cardImage"
          name="cardImage"
          value={ cardImage }
          data-testid="image-input"
          onChange={ onInputChange }
          placeholder={ !cardImage ? 'URL da imagem' : '' }
        />
      </label>
    </p>
  );
}

InputImageURL.propTypes = {
  cardImage: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
