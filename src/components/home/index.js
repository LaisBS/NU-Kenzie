import React from "react";
import { useHistory } from "react-router-dom";
import { Container, Content, Background } from "./style";
import NuKenzie from "../images/Nu Kenzie.svg";

function Home() {
  const history = useHistory();

  function handleClick() {
    return history.push("/usuario");
  }
  return (
    <Container>
      <Content>
        <img src={NuKenzie} />
        <h1>Centralize o controle das suas finanças</h1>
        <span>De forma rapida e segura</span>
        <button onClick={() => handleClick()}>Iniciar</button>
      </Content>

      <Background />
    </Container>
  );
}

export default Home;
