function ExpenseDate(props) {
  const month = props.dates.toLocaleString("en-GB", { month: "long" });
  const year = props.dates.getFullYear();
  const day = props.dates.toLocaleString("en-GB", { day: "2-digit" });
  return (
    <div className="ExpenseDate">
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
    </div>
  );
}

export default ExpenseDate;
