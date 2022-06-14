import { useState } from "react";
import React from "react";
import { Formulario, Section } from "./style.js";
import { TbCurrencyReal } from "react-icons/tb";

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
    <Formulario onSubmit={prevent}>
      <label htmlFor="description">Descrição</label>
      <input
        name="description"
        placeholder="Digite aqui sua descrição"
        value={descriptionValue}
        onChange={(event) => setDescriptionInput(event.target.value)}
      ></input>
      <div>
        <Section>
          <label htmlFor="valor">Valor</label>
          <input
            name="valor"
            placeholder="1"
            type="number"
            value={valueInput}
            onChange={(event) => setValueInput(event.target.value)}
          ></input>
          <TbCurrencyReal />
        </Section>
        <Section>
          <label htmlFor="select">Tipo de valor</label>
          <select
            name="select"
            value={typeValue}
            onChange={(event) => setTypeSelect(event.target.value)}
          >
            <option></option>
            <option>Entrada</option>
            <option>Saída</option>
          </select>
        </Section>
      </div>
      <button type="submit">Inserir valor</button>
    </Formulario>
  );
}

export default Form;
