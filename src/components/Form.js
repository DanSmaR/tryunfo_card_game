import React from 'react';
import InputName from './InputName';
import InputTextArea from './InputTextArea';
import InputNumberAttr from './InputNumberAttr';
import InputImageURL from './InputImageURL';
import InputSelectRare from './InputSelectRare';
import InputCheckbox from './InputCheckbox';
import SubmitButton from './SubmitButton';

class Form extends React.Component {
  render() {
    return (
      <form action="">
        <h2>Adicionar nova carta</h2>

        <section>
          <InputName />
          <InputTextArea />
        </section>

        <section>
          <ul>
            <InputNumberAttr
              id="attr01"
              name="attr01Card"
              value="01"
              testId="attr1-input"
            >
              Attr01
            </InputNumberAttr>
            <InputNumberAttr
              id="attr02"
              name="attr02Card"
              value="02"
              testId="attr2-input"
            >
              Attr02
            </InputNumberAttr>
            <InputNumberAttr
              id="attr03"
              name="attr03Card"
              value="03"
              testId="attr3-input"
            >
              Attr03
            </InputNumberAttr>
          </ul>
        </section>

        <section>
          <InputImageURL />
        </section>

        <section>
          <InputSelectRare />
        </section>

        <section>
          <InputCheckbox />
        </section>

        <section>
          <SubmitButton />
        </section>
      </form>
    );
  }
}

export default Form;
