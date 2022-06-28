import React from 'react';
import PropTypes from 'prop-types';
import InputName from './InputName';
import InputTextArea from './InputTextArea';
import InputNumberAttr from './InputNumberAttr';
import PointSumInfo from './PointSumInfo';
import InputImageURL from './InputImageURL';
import InputSelectRare from './InputSelectRare';
import InputCheckbox from './InputCheckbox';
import SubmitButton from './SubmitButton';

class Form extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const {
      cardAttr1,
      cardAttr2,
      cardAttr3,
      isAttr1Valid,
      isAttr2Valid,
      isAttr3Valid,
      onInputChange,
      isSumAttrsValid,
    } = this.props;

    const inputAttrs = [
      {
        id: 'attr01',
        name: 'cardAttr1',
        value: cardAttr1,
        testId: 'attr1-input',
        isValidInput: isAttr1Valid,
        textLabel: 'Attrib 1',
      },
      {
        id: 'attr02',
        name: 'cardAttr2',
        value: cardAttr2,
        testId: 'attr2-input',
        isValidInput: isAttr2Valid,
        textLabel: 'Attrib 2',
      },
      {
        id: 'attr03',
        name: 'cardAttr3',
        value: cardAttr3,
        testId: 'attr3-input',
        isValidInput: isAttr3Valid,
        textLabel: 'Attrib 3',
      },
    ];

    return (
      <form className="form" onSubmit={ this.handleSubmit }>
        <h2>Adicionar nova carta</h2>

        <section className="form__card-info">
          <InputName { ...this.props } />
          <InputTextArea { ...this.props } />
        </section>

        <section className="form__card-level">
          <ul>
            {
              inputAttrs.map((item) => (
                <InputNumberAttr
                  key={ item.id }
                  { ...item }
                  onInputChange={ onInputChange }
                  isSumAttrsValid={ isSumAttrsValid }
                >
                  { item.textLabel }
                </InputNumberAttr>
              ))
            }
          </ul>
          <PointSumInfo { ...this.props } />
        </section>

        <section className="form__card-image">
          <InputImageURL { ...this.props } />
        </section>

        <section className="form__card-rare">
          <InputSelectRare { ...this.props } />
        </section>

        <section className="form__card-trunfo">
          <InputCheckbox { ...this.props } />
        </section>

        <section className="form__card-save">
          <SubmitButton { ...this.props } />
        </section>
      </form>
    );
  }
}

export default Form;

Form.propTypes = {
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  isAttr1Valid: PropTypes.bool.isRequired,
  isAttr2Valid: PropTypes.bool.isRequired,
  isAttr3Valid: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  isSumAttrsValid: PropTypes.bool.isRequired,
};
