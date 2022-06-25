import React from 'react';

export default function InputCheckbox(props) {
  return (
    <p>
      <label htmlFor="trunfoCheck">
        <input
          type="checkbox"
          name="isTrunfo"
          id="trunfoCheck"
          checked={ props }
          onChange={ props }
          data-testid="trunfo-input"
        />
        Super Trybe Trunfo
      </label>
    </p>
  );
}
