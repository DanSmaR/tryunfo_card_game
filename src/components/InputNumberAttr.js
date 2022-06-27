import React from 'react';
import PropTypes from 'prop-types';

export default function InputNumberAttr(props) {
  const { children, id, name, value, testId, onInputChange } = props;

  return (
    <li className="mb-3 row">
      <label htmlFor={ id } className="col-sm-2 col-form-label">
        { children }
      </label>
      <div className="col-sm-10">
        <input
          className="form-control"
          type="number"
          name={ name }
          id={ id }
          value={ value }
          onChange={ onInputChange }
          data-testid={ testId }
        />
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
};
