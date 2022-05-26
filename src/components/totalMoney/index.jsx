import "./style.css";

function TotalMoney({ listTransactions }) {
  const valor = listTransactions.reduce((valorAnterior, valorAtual) => {
    if (valorAtual.type === "Entrada") {
      return valorAnterior + parseInt(valorAtual.valor);
    }
    if (valorAtual.type === "Saída") {
      return valorAnterior - parseInt(valorAtual.valor);
    }
  }, 0);

  return (
    <div className="saldo">
      <div id="conteudo">
        <h3>Valor total:</h3>
        <p>O valor total se refere ao saldo</p>
      </div>
      <h3 id="pink">
        {new Intl.NumberFormat([], {
          style: "currency",
          currency: "BRL",
        }).format(valor)}
      </h3>
    </div>
  );
}
export default TotalMoney;
