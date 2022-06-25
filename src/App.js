import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

/* const defaultProps = {
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
}; */
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'raro',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    };
  }

  handleInputChanges = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <article className="wrapper">
        <h1>Tryunfo</h1>
        <section>
          <Form { ...this.state } onInputChange={ this.handleInputChanges } />
        </section>

        <section>
          <Card { ...this.state } />
        </section>
      </article>
    );
  }
}

export default App;
