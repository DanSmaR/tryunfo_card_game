import React from 'react';

export default function InputNumberAttr(props) {
  const { children, id, name, value, testId } = props;

  return (
    <li>
      <label htmlFor={ id }>
        { children }
        <input
          type="number"
          name={ name }
          id={ id }
          value={ value }
          onChange={ props }
          data-testid={ testId }
        />
      </label>
    </li>
  );
}
