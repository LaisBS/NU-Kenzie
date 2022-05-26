import "./style.css";

function Card({ transaction }) {
  return (
    <div className="all">
      {
        <div
          className="status"
          style={{
            backgroundColor: transaction.type === "Entrada" ? "green" : "gray",
          }}
        ></div>
      }
      <div className="content">
        <h3>{transaction.description}</h3>
        <span>{transaction.type}</span>
        <p className="price">
          {new Intl.NumberFormat([], {
            style: "currency",
            currency: "BRL",
          }).format(transaction.valor)}
        </p>
      </div>
    </div>
  );
}
export default Card;
