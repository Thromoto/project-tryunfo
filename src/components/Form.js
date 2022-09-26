import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <>
        <label htmlFor="nome">
          Nome da carta:
          <input type="text" data-testid="name-input" />
        </label>
        <label htmlFor="descricao">
          Descrição da carta:
          <textarea data-testid="description-input" />
        </label>
        <label htmlFor="atributo1">
          Atributo 1:
          <input data-testid="attr1-input" />
        </label>
        <label htmlFor="atributo2">
          Atributo 2:
          <input data-testid="attr2-input" />
        </label>
        <label htmlFor="atributo3">
          Atributo 3:
          <input data-testid="attr3-input" />
        </label>
        <label htmlFor="img">
          Imagem:
          <input type="text" data-testid="image-input" />
        </label>
        <label htmlFor="raridade">
          Raridade da carta:
          <select data-testid="rare-input">
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo">
          Super Trunfo:
          <input type="checkbox" data-testid="trunfo-input" />
        </label>
        <button type="button" data-testid="save-button">Salvar</button>
      </>
    );
  }
}

export default Form;
