import { useState } from "react";
import React from "react";
import "./style.css";

function Form({ listTransactions, setListTransactions }) {
  const [valueInput, setValueInput] = useState("");
  const [descriptionValue, setDescriptionInput] = useState("");
  const [typeValue, setTypeSelect] = useState("");
  function prevent(event) {
    event.preventDefault();
    if (descriptionValue && typeValue && valueInput) {
      return setListTransactions([
        ...listTransactions,
        { description: descriptionValue, type: typeValue, valor: valueInput },
      ]);
    }
  }
  return (
    <div className="form">
      <form onSubmit={prevent}>
        <p>Descrição</p>
        <input
          id="description"
          placeholder="Digite aqui sua descrição"
          value={descriptionValue}
          onChange={(event) => setDescriptionInput(event.target.value)}
        ></input>
        <div>
          <p id="areaValor">Valor</p>
          <span id="rs">R$</span>
          <input
            id="valor"
            placeholder="1"
            type="number"
            value={valueInput}
            onChange={(event) => setValueInput(event.target.value)}
          ></input>
          <p id="tipoValor">Tipo de valor</p>
        </div>
        <div>
          <select
            id="select"
            value={typeValue}
            onChange={(event) => setTypeSelect(event.target.value)}
          >
            <option></option>
            <option>Entrada</option>
            <option>Saída</option>
          </select>
        </div>
        <button type="submit">Inserir valor</button>
      </form>
    </div>
  );
}

export default Form;
