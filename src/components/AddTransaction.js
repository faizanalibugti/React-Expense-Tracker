import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  let [text, setText] = useState("");
  let [amount, setAmount] = useState('');

  const { addTransaction } = useContext(GlobalContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    addTransaction({
      id: Math.random() * 10000,
      text,
      amount: Number(amount),
    });

    setText('')
    setAmount('')
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form id="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
