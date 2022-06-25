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
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
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
    }, () => this.setDisableSaveButton());
  }

  setDisableSaveButton = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;

    const MAX_SUM = 210;
    const MAX_ATTR_VALUE = 90;

    const cardAttr1Num = parseInt(cardAttr1, 10);
    const cardAttr2Num = parseInt(cardAttr2, 10);
    const cardAttr3Num = parseInt(cardAttr3, 10);

    const isInputsNotEmpty = Boolean(
      cardName && cardDescription && cardImage && cardRare,
    );
    const isSumAttrsValid = Boolean(
      (cardAttr1Num + cardAttr2Num + cardAttr3Num) <= MAX_SUM,
    );
    const isAttr1Valid = Boolean((cardAttr1Num >= 0) && (cardAttr1Num <= MAX_ATTR_VALUE));
    const isAttr2Valid = Boolean((cardAttr2Num >= 0) && (cardAttr2Num <= MAX_ATTR_VALUE));
    const isAttr3Valid = Boolean((cardAttr3Num >= 0) && (cardAttr3Num <= MAX_ATTR_VALUE));

    let isDisabled = true;

    if (
      isInputsNotEmpty
      && isSumAttrsValid
      && isAttr1Valid
      && isAttr2Valid
      && isAttr3Valid
    ) {
      isDisabled = false;
    }
    this.setState({
      isSaveButtonDisabled: isDisabled,
    });
  }

  render() {
    return (
      <article className="wrapper">
        <h1>Tryunfo</h1>
        <section>
          <Form
            { ...this.state }
            onInputChange={ this.handleInputChanges }
          />
        </section>

        <section>
          <Card { ...this.state } />
        </section>
      </article>
    );
  }
}

export default App;
