import React from 'react';

export default function InputSelectRare(props) {
  const { cardRare, onInputChange } = props;
  return (
    <p>
      <label htmlFor="cardRareSelection">
        <select
          name="cardRare"
          id="cardRareSelection"
          value={ cardRare }
          onChange={ onInputChange }
          data-testid="rare-input"
        >
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
      </label>
    </p>
  );
}
