import React from 'react';

export default function InputName(props) {
  const { cardName, onInputChange } = props;
  return (
    <p>
      <label htmlFor="name">
        Nome
        <input
          type="text"
          id="name"
          name="cardName"
          value={ cardName }
          data-testid="name-input"
          onChange={ onInputChange }
          placeholder={ !cardName ? 'Digite um Nome' : '' }
        />
      </label>
    </p>
  );
}
