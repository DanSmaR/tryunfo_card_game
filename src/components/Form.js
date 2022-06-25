import React from 'react';
import InputName from './InputName';
import InputTextArea from './InputTextArea';

class Form extends React.Component {
  render() {
    return (
      <form action="">
        <h2>Adicionar nova carta</h2>
        <section>
          <InputName />
          <InputTextArea />
        </section>
      </form>
    );
  }
}

export default Form;
