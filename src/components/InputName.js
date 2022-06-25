import React from 'react';

export default function InputName(props) {
  return (
    <p>
      <label htmlFor="name">
        Nome
        <input
          type="text"
          id="name"
          name="cardName"
          value={ props }
          data-testid="name-input"
          onChange={ props }
        />
      </label>
    </p>
  );
}
