import React from 'react';

export default function SubmitButton(props) {
  const { isSaveButtonDisabled, onSaveButtonClick } = props;
  return (
    <p>
      <button
        type="submit"
        data-testid="save-button"
        disabled={ isSaveButtonDisabled }
        onClick={ onSaveButtonClick }
      >
        Salvar
      </button>
    </p>
  );
}
