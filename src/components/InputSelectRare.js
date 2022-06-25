import React from 'react';

export default function InputSelectRare(props) {
  return (
    <p>
      <label htmlFor="cardRare">
        <select
          name="cardRareSelection"
          id="cardRare"
          value={ props }
          onChange={ props }
          data-testid="rare-input"
        >
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito-raro">muito raro</option>
        </select>
      </label>
    </p>
  );
}
