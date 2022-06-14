import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.header`
  width: 95%;
  box-shadow: 0px 4px 32px -12px rgba(0, 0, 0, 0.25);
  background: #f8f9fa;
  display: flex;
  padding: 30px;
  justify-content: space-around;

  button {
    background-color: #e9ecef;
    color: #343a40;
    height: 45px;
    border-radius: 8px;
    width: 10%;
    border: none;
    font-size: 16px;
    cursor: pointer;
  }

  button:hover {
    background-color: #fd377e;
    color: #e9ecef;
  }
`;

export const Content = styled.main`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  section {
    display: flex;
    flex-direction: column;
  }
`;

export const ResumoFinanceiro = styled.div`
  display: flex;
  flex-direction: column;
  height: 70vh;
  margin-top: 30px;
  width: 80vh;

  section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    button {
      background-color: #e9ecef;
      color: #343a40;
      border-radius: 8px;
      border: none;
      font-size: 16px;
      padding: 10px;
      margin-left: 10px;
      cursor: pointer;
    }
    button:focus {
      background-color: #fd377e;
      color: white;
    }
  }
`;
