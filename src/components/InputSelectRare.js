import React from 'react';
import PropTypes from 'prop-types';

export default function InputSelectRare(props) {
  const { cardRare, onInputChange } = props;
  return (
    <p>
      <label htmlFor="cardRareSelection" className="row-input">
        <span>Raridade</span>
        <select
          className="form-select"
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

InputSelectRare.propTypes = {
  cardRare: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
