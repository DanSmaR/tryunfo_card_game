import React from 'react';

export default function InputCheckbox(props) {
  const { cardTrunfo, onInputChange } = props;
  return (
    <p>
      <label htmlFor="trunfoCheck">
        <input
          type="checkbox"
          name="cardTrunfo"
          id="trunfoCheck"
          checked={ cardTrunfo }
          onChange={ onInputChange }
          data-testid="trunfo-input"
        />
        Super Trybe Trunfo
      </label>
    </p>
  );
}
