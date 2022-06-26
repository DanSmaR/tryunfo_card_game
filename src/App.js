import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

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
      cards: [],
    };
  }

  handleInputChanges = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({
      [name]: value,
    }, () => this.setDisableSaveButton());
  }

  handleSavedCards = (event) => {
    event.preventDefault();

    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      cards,
    } = this.state;

    const cardData = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    cards.push(cardData);

    if (cardTrunfo) {
      this.setState({
        hasTrunfo: true,
      });
    }

    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      cards,
    });
  }

  setDisableSaveButton() {
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
            onSaveButtonClick={ this.handleSavedCards }
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
