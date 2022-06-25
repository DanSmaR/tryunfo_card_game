import React from 'react';

export default function InputTextArea(props) {
  return (
    <p>
      <label htmlFor="description">
        Descrição
        <textarea
          name="cardDescription"
          id="description"
          cols="30"
          rows="10"
          value={ props }
          onChange={ props }
          data-testid="description-input"
        />
      </label>
    </p>
  );
}
