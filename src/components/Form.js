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
    const {
      cardAttr1,
      cardAttr2,
      cardAttr3,
      hasTrunfo,
    } = this.props;

    return (
      <form action="">
        <h2>Adicionar nova carta</h2>

        <section>
          <InputName { ...this.props } />
          <InputTextArea { ...this.props } />
        </section>

        <section>
          <ul>
            <InputNumberAttr
              { ...this.props }
              id="attr01"
              name="cardAttr1"
              value={ cardAttr1 }
              testId="attr1-input"
            >
              Attr01
            </InputNumberAttr>
            <InputNumberAttr
              { ...this.props }
              id="attr02"
              name="cardAttr2"
              value={ cardAttr2 }
              testId="attr2-input"
            >
              Attr02
            </InputNumberAttr>
            <InputNumberAttr
              { ...this.props }
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
          <InputImageURL { ...this.props } />
        </section>

        <section>
          <InputSelectRare { ...this.props } />
        </section>

        <section>
          <InputCheckbox { ...this.props } />
        </section>

        <section>
          <SubmitButton { ...this.props } />
        </section>
      </form>
    );
  }
}

export default Form;
