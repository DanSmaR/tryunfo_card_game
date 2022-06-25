import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

const defaultProps = {
  cardName: 'Nome da carta',
  cardDescription: 'Descrição da carta',
  cardAttr1: '12',
  cardAttr2: '34',
  cardAttr3: '56',
  cardImage: 'url-to-image',
  cardRare: 'raro',
  cardTrunfo: true,
  hasTrunfo: false,
  isSaveButtonDisabled: false,
  onInputChange: () => {},
  onSaveButtonClick: () => {},
};
class App extends React.Component {
  render() {
    return (
      <article className="wrapper">
        <h1>Tryunfo</h1>
        <section>
          <Form { ...defaultProps } />
        </section>

        <section>
          <Card { ...defaultProps } />
        </section>
      </article>
    );
  }
}

export default App;
