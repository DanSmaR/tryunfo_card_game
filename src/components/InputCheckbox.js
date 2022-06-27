import React from 'react';
import PropTypes from 'prop-types';

export default function InputCheckbox(props) {
  const { cardTrunfo, onInputChange, hasTrunfo } = props;
  const checkboxElem = (
    <label htmlFor="trunfoCheck" className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        name="cardTrunfo"
        id="trunfoCheck"
        checked={ cardTrunfo }
        onChange={ onInputChange }
        data-testid="trunfo-input"
      />
      Super Trunfo
    </label>);
  return (
    <p>
      {
        !hasTrunfo ? checkboxElem : 'Você já tem um Super Trunfo em seu baralho'
      }
    </p>
  );
}

InputCheckbox.propTypes = {
  cardTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
};
