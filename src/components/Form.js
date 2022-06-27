import React from 'react';
import PropTypes from 'prop-types';
import InputName from './InputName';
import InputTextArea from './InputTextArea';
import InputNumberAttr from './InputNumberAttr';
import InputImageURL from './InputImageURL';
import InputSelectRare from './InputSelectRare';
import InputCheckbox from './InputCheckbox';
import SubmitButton from './SubmitButton';

function Form(props) {
  const { cardAttr1, cardAttr2, cardAttr3 } = props;

  return (
    <form>
      <h2>Adicionar nova carta</h2>

      <section>
        <InputName { ...props } />
        <InputTextArea { ...props } />
      </section>

      <section>
        <ul>
          <InputNumberAttr
            { ...props }
            id="attr01"
            name="cardAttr1"
            value={ cardAttr1 }
            testId="attr1-input"
          >
            Attr01
          </InputNumberAttr>
          <InputNumberAttr
            { ...props }
            id="attr02"
            name="cardAttr2"
            value={ cardAttr2 }
            testId="attr2-input"
          >
            Attr02
          </InputNumberAttr>
          <InputNumberAttr
            { ...props }
            id="attr03"
            name="cardAttr3"
            value={ cardAttr3 }
            testId="attr3-input"
          >
            Attr03
          </InputNumberAttr>
        </ul>
      </section>

      <section>
        <InputImageURL { ...props } />
      </section>

      <section>
        <InputSelectRare { ...props } />
      </section>

      <section>
        <InputCheckbox { ...props } />
      </section>

      <section>
        <SubmitButton { ...props } />
      </section>
    </form>
  );
}

export default Form;

Form.propTypes = {
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
};
