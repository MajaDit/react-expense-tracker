import "./ExpenseDate.css";

function ExpenseDate(props) {
  const month = props.dates.toLocaleString("en-GB", { month: "long" });
  const year = props.dates.getFullYear();
  const day = props.dates.toLocaleString("en-GB", { day: "2-digit" });
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
