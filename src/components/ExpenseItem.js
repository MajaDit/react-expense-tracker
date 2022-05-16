import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

const ExpenseItem = (props) => {
  const clickHandler = () => {
    alert("clicked");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate dates={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Button</button>
    </Card>
  );
};

export default ExpenseItem;
