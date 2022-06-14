import styled from "styled-components";
import loginImage from "../images/image.svg";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  background-color: #212529;
`;
export const Background = styled.div`
  @media (min-width: 1100px) {
    flex: 1;
    background: url(${loginImage}) no-repeat center;
    background-size: contain;
    background-color: #212529;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  width: 50%;
  max-width: 340px;
  margin-left: 150px;
  height: 100%;

  h1,
  span {
    color: white;
  }

  button {
    background-color: #fd377e;
    color: white;
    height: 45px;
    border-radius: 8px;
    width: 100%;
    margin-top: 16px;
    border: none;
    font-size: 16px;
  }

  button:hover {
    background-color: white;
    color: #868e96;
  }

  img {
    width: 122.68px;
    height: 19.53px;
  }
`;
