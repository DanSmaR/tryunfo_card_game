import React from 'react';

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
