import React from 'react';
import PropTypes from 'prop-types';

export default function InputNumberAttr(props) {
  const { children, id, name, value, testId, onInputChange } = props;

  return (
    <li>
      <label htmlFor={ id }>
        { children }
        <input
          type="number"
          name={ name }
          id={ id }
          value={ value }
          onChange={ onInputChange }
          data-testid={ testId }
        />
      </label>
    </li>
  );
}

InputNumberAttr.propTypes = {
  children: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
