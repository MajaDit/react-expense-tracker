import "./ExpenseDate.css";
import Card from "./Card";

const ExpenseDate = (props) => {
  const month = props.dates.toLocaleString("en-GB", { month: "long" });
  const year = props.dates.getFullYear();
  const day = props.dates.toLocaleString("en-GB", { day: "2-digit" });
  return (
    <Card className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </Card>
  );
};

export default ExpenseDate;
