import React from 'react';
import PropTypes from 'prop-types';

export default function InputNumberAttr(props) {
  const {
    children,
    id,
    name,
    value,
    testId,
    onInputChange,
    isValidInput,
    isSumAttrsValid,
  } = props;

  const inputStyleValidInput = {
    backgroundImage: `linear-gradient(90deg,#cfeaff ${value}%, #ffffff 0%`,
  };

  const inputStyleInvalidInput = {
    backgroundImage: `linear-gradient(90deg,#ffc5c5 ${value}%, #ffffff 0%`,
  };

  return (
    <li className="row">
      <label htmlFor={ id } className="col-sm-3 col-form-label">
        { children }
      </label>
      <div className="col-sm-10 input-group">
        <input
          style={
            isValidInput && isSumAttrsValid
              ? inputStyleValidInput : inputStyleInvalidInput
          }
          className="form-control"
          type="number"
          name={ name }
          id={ id }
          value={ value }
          onChange={ onInputChange }
          data-testid={ testId }
        />
        <span className="input-group-text">
          {
            isValidInput && isSumAttrsValid
              ? <i className="fa fa-check" aria-hidden="true" />
              : <i className="fa fa-times" aria-hidden="true" />
          }
        </span>
      </div>
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
  isValidInput: PropTypes.bool.isRequired,
  isSumAttrsValid: PropTypes.bool.isRequired,
};
