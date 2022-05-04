import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  let balance = transactions
    .map((transaction) => transaction.amount)
    .reduce((acc, item) => acc + item, 0).toFixed(2);

  const sign = balance < 0 ? '-' : ''

  return (
    <>
      <h4>Your Balance</h4>
      <h1>{sign}${Math.abs(balance)}</h1>
    </>
  );
};

export default Balance;
