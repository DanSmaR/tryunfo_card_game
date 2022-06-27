import React from 'react';
import PropTypes from 'prop-types';

export default function InputTextArea(props) {
  const { cardDescription, onInputChange } = props;

  return (
    <p>
      <label htmlFor="description">
        Descrição
        <textarea
          className="form-control"
          name="cardDescription"
          id="description"
          cols="30"
          rows="5"
          value={ cardDescription }
          onChange={ onInputChange }
          data-testid="description-input"
          placeholder={ !cardDescription ? 'Descrição sobre a Carta' : '' }
        />
      </label>
    </p>
  );
}

InputTextArea.propTypes = {
  cardDescription: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
