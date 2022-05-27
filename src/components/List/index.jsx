import Card from "../Card";
import "./style.css";

function List({ newArr, handleTrash }) {
  return (
    <ul>
      {newArr.map((transaction, index) => (
        <li key={index}>
          {<Card transaction={transaction} handleTrash={handleTrash} />}
        </li>
      ))}
    </ul>
  );
}

export default List;
