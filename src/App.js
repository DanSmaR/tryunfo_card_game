import React from 'react';
import Form from './components/Form';

const defaultProps = {
  cardName: "Nome da carta",
  cardDescription: "Descrição da carta",
  cardAttr1: "12",
  cardAttr2: "34",
  cardAttr3: "56",
  cardImage: "url-to-image",
  cardRare: "raro",
  cardTrunfo: true,
  hasTrunfo: false,
  isSaveButtonDisabled: false,
  onInputChange: () => { },
  onSaveButtonClick: () => { },
};
class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <h1>Tryunfo</h1>
        <Form { ...defaultProps } />
      </div>
    );
  }
}

export default App;
