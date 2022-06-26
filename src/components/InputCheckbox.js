import React from 'react';

export default function InputCheckbox(props) {
  const { cardTrunfo, onInputChange, hasTrunfo } = props;
  const checkboxElem = (
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
    </label>);
  return (
    <p>
      {
        !hasTrunfo ? checkboxElem : 'Você já tem um Super Trunfo em seu baralho'
      }
    </p>
  );
}
