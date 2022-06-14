import { useState } from "react";
import React from "react";
import Form from "../Form";
import List from "../List";
import TotalMoney from "../totalMoney";
import noCard from "../images/NoCard.svg";
import { useHistory } from "react-router-dom";
import { Header, Container, Content, ResumoFinanceiro } from "./style.js";
import NuKenzie from "../images/Nu Kenzie black.svg";

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
  const history = useHistory();
  function handleClick() {
    return history.push("/");
  }
  return (
    <Container>
      <Header>
        <img src={NuKenzie} />
        <button onClick={() => handleClick()}>Inicio</button>
      </Header>
      <Content>
        <section>
          <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          />
          {listTransactions.length > 0 && (
            <TotalMoney listTransactions={listTransactions} />
          )}
        </section>
        <ResumoFinanceiro>
          <section>
            <h3 id="nav">Resumo financeiro</h3>
            <div id="opcoes">
              <button onClick={() => setFiltros("Todos")}>Todos</button>
              <button onClick={() => setFiltros("Entrada")}>Entradas</button>
              <button onClick={() => setFiltros("Saída")}>Despesas</button>
            </div>
          </section>
          {newArr.length === 0 ? (
            <div id="svg">
              <h2>Você ainda não possui nenhum lançamento</h2>
              <img src={noCard} alt="Cards vazios" />
            </div>
          ) : (
            <List newArr={newArr} handleTrash={handleTrash} />
          )}
        </ResumoFinanceiro>
      </Content>
    </Container>
  );
}

export default Usuario;
