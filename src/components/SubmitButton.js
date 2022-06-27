import React from 'react';
import PropTypes from 'prop-types';

export default function SubmitButton(props) {
  const { isSaveButtonDisabled, onSaveButtonClick } = props;
  const className = isSaveButtonDisabled ? 'btn btn-danger' : 'btn btn-success';
  return (
    <p className="d-grid gap-2">
      <button
        className={ className }
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
