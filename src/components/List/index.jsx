import Card from "../Card";
import "./style.css";

function List({ listTransactions }) {
  return (
    <ul>
      {listTransactions.map((transaction, index) => (
        <li>{<Card transaction={transaction} key={index} />}</li>
      ))}
    </ul>
  );
}
export default List;
