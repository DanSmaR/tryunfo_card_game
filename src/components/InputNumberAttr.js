import React from 'react';

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
