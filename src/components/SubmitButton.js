import React from 'react';
import PropTypes from 'prop-types';

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

SubmitButton.propTypes = {
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
