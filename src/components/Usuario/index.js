import { useState } from "react";
import React from "react";
import Form from "../Form";
import List from "../List";
import TotalMoney from "../totalMoney";
import noCard from "../images/NoCard.svg";
import { Link } from "react-router-dom";
import "./style.css";

function Usuario() {
  const [listTransactions, setListTransactions] = useState([]);
  const [filtro, setFiltros] = useState("Todos");

  const newArr = listTransactions.filter(({ type }) =>
    filtro === "Todos" ? type !== "Todos" : type === filtro
  );
  function handleTrash(transaction) {
    const novaArr = listTransactions.filter((elem) => {
      return elem !== transaction;
    });
    return setListTransactions(novaArr);
  }
  return (
    <div className="App">
      <header>
        <h1 id="rosa">Nu</h1>
        <h1>Kenzie</h1>
        <Link to="/">Inicio</Link>
      </header>
      <main id="App-header">
        <Form
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
        />
        {listTransactions.length > 0 && (
          <TotalMoney listTransactions={listTransactions} />
        )}
        <div id="area">
          <div className="resumo">
            <h3 id="nav">Resumo financeiro</h3>
            <div id="opcoes">
              <button onClick={() => setFiltros("Todos")}>Todos</button>
              <button onClick={() => setFiltros("Entrada")}>Entradas</button>
              <button onClick={() => setFiltros("Saída")}>Despesas</button>
            </div>
          </div>
          {newArr.length === 0 ? (
            <div id="svg">
              <h2>Você ainda não possui nenhum lançamento</h2>
              <img src={noCard} alt="Cards vazios" />
            </div>
          ) : (
            <List newArr={newArr} handleTrash={handleTrash} />
          )}
        </div>
      </main>
    </div>
  );
}

export default Usuario;
