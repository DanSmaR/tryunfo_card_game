import React from 'react';

export default function InputName(props) {
  return (
    <p>
      <label htmlFor="name">
        Nome
        <input
          type="text"
          id="name"
          name="card-name"
          value={ props }
          data-testid="name-input"
        />
      </label>
    </p>
  );
}
