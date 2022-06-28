import React from 'react';
import PropTypes from 'prop-types';

export default function InputImageURL(props) {
  const { cardImage, onInputChange } = props;
  return (
    <p>
      <label htmlFor="cardImage" className="row-input">
        <span className="col-sm-3 col-form-label">Imagem</span>
        <span className="col-sm-10 input-group">
          <span className="input-group-text">
            <i className="fa fa-link" aria-hidden="true" />
          </span>
          <input
            className="form-control"
            type="text"
            id="cardImage"
            name="cardImage"
            value={ cardImage }
            data-testid="image-input"
            onChange={ onInputChange }
            placeholder={ !cardImage ? 'digite 1 a 1084' : '' }
          />
        </span>
      </label>
    </p>
  );
}

InputImageURL.propTypes = {
  cardImage: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
