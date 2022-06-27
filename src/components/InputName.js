import React from 'react';
import PropTypes from 'prop-types';

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
          placeholder={ !cardName ? 'Nome da Carta' : '' }
        />
      </label>
    </p>
  );
}

InputName.propTypes = {
  cardName: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
