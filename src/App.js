import { useState } from "react";
import React from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import TotalMoney from "./components/totalMoney";

function App() {
  const [listTransactions, setListTransactions] = useState([]);

  // function FiltrarEntradas() {
  //   const newList = listTransactions.filter((elem) => {
  //     console.log(elem.type);
  //     elem.type === "Entradas";
  //     return <List listTransactions={newList} />;
  //   });
  // }
  // function FitrarSaidas() {
  //   const newList = listTransactions.filter((elem) => {
  //     elem.type === "Despesas";
  //     return <List listTransactions={newList} />;
  //   });
  // }
  return (
    <div className="App">
      <header>
        <h1 id="rosa">Nu</h1>
        <h1>Kenzie</h1>
        <button>Inicio</button>
      </header>
      <main className="App-header">
        <Form
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
        />
        {listTransactions.length > 0 && (
          <TotalMoney listTransactions={listTransactions} />
        )}
        <div>
          <h3 id="nav">Resumo financeiro</h3>
          <div id="opcoes">
            <button>Todos</button>
            <button>Entradas</button>
            <button>Despesas</button>
          </div>
        </div>
        <List listTransactions={listTransactions} />
      </main>
    </div>
  );
}

export default App;
