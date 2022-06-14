import styled from "styled-components";

export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  width: 50vh;
  height: 40vh;
  padding: 40px;
  border: 1px solid #e9ecef;
  border-radius: 4px;
  justify-content: space-between;
  align-items: stretch;
  font-size: 12px;
  margin-top: 40px;
  input {
    height: 40px;
    padding: 10px;
    border: 2px solid #f8f9fa;
    border-radius: 8px;
  }
  select {
    height: 60px;
    padding: 10px;
    border: 2px solid #f8f9fa;
    border-radius: 8px;
  }

  div {
    display: flex;
    justify-content: space-between;
  }
  button {
    background-color: #fd377e;
    color: white;
    border-radius: 8px;
    width: 100%;
    border: none;
    font-size: 16px;
    padding: 15px;
    cursor: pointer;
  }

  button:hover {
    background-color: #e34981;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;

  svg {
    color: #343a40;
    font-size: 16px;
    z-index: 1;
    position: relative;
    bottom: 40px;
    left: 140px;
  }
`;
