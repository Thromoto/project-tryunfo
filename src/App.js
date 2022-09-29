import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

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
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      tasksList: [],
    };
  }

  enableSaveBtn = () => {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const { cardImage, cardRare } = this.state;

    const name = cardName.length > 0;
    const descricao = cardDescription.length > 0;
    const img = cardImage.length > 0;
    const raro = cardRare.length > 0;
    const inputPalavras = name && descricao && img && raro;

    const minimo = 0;
    const maximo = 90;
    const soma = 210;

    const at1 = +cardAttr1 >= minimo && +cardAttr1 <= maximo;
    const at2 = +cardAttr2 >= minimo && +cardAttr2 <= maximo;
    const at3 = +cardAttr3 >= minimo && +cardAttr3 <= maximo;
    const atTotal = ((+cardAttr1 + +cardAttr2 + +cardAttr3) <= soma);
    const atributos = at1 && at2 && at3 && atTotal;

    this.setState({ isSaveButtonDisabled: !(inputPalavras && atributos) });
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => this.enableSaveBtn());
  };

  handleClick = () => {
    const { cardName, cardDescription, cardImage,
      cardAttr1, cardAttr2, cardAttr3, cardRare } = this.state;
    const newTask = { cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare };
    this.setState((prevState) => ({
      tasksList: [...prevState.tasksList, newTask],
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardRare: '',
    }));
  };

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const { cardImage, cardRare, cardTrunfo, isSaveButtonDisabled } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.handleClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
