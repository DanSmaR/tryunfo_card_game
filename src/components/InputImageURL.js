import React from 'react';

export default function InputImageURL(props) {
  return (
    <p>
      <label htmlFor="cardImage">
        Imagem
        <input
          type="text"
          id="cardImage"
          value={ props }
          data-testid="image-input"
          onChange={ props }
        />
      </label>
    </p>
  );
}
