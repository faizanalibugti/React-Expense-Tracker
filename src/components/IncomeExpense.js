import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);

  let income = transactions
    .filter((transaction) => transaction.amount > 0)
    .map((transaction) => transaction.amount)
    .reduce((acc, item) => acc + item, 0)
    .toFixed(2);

  let expense = transactions
    .filter((transaction) => transaction.amount < 0)
    .map((transaction) => transaction.amount)
    .reduce((acc, item) => acc + item, 0)
    .toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+${Math.abs(income)}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-${Math.abs(expense)}</p>
      </div>
    </div>
  );
};

export default IncomeExpense;
