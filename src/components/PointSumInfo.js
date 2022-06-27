import React from 'react';
import PropTypes from 'prop-types';

function PointSumInfo(props) {
  const { cardAttr1, cardAttr2, cardAttr3, maxAttrSumValue, isSumAttrsValid } = props;
  return (
    <div
      className={
        isSumAttrsValid ? 'attr-info attr-info--valid' : 'attr-info attr-info--danger'
      }
    >
      <p>
        {
          `Pontos Restantes: ${
            maxAttrSumValue - (parseInt(cardAttr1, 10)
            + parseInt(cardAttr2, 10) + parseInt(cardAttr3, 10))
          }`
        }
      </p>
    </div>
  );
}

export default PointSumInfo;

PointSumInfo.propTypes = {
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  maxAttrSumValue: PropTypes.number.isRequired,
  isSumAttrsValid: PropTypes.bool.isRequired,
};
