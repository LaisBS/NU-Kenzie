import { useState } from "react";
import React from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import TotalMoney from "./components/totalMoney";
import noCard from "./images/NoCard.svg";

function App() {
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
        <button>Inicio</button>
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

export default App;
