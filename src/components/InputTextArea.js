import React from 'react';

export default function InputTextArea(props) {
  const { cardDescription, onInputChange } = props;

  return (
    <p>
      <label htmlFor="description">
        Descrição
        <textarea
          name="cardDescription"
          id="description"
          cols="30"
          rows="10"
          value={ cardDescription }
          onChange={ onInputChange }
          data-testid="description-input"
        />
      </label>
    </p>
  );
}
