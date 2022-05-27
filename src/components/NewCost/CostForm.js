import React, { useContext, useState } from 'react';
import './CostForm.css';
import { v4 as uuidv4 } from 'uuid';
import ExpensesContext from '../Context/ExpensesContext';

function CostForm(props) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const { AddCost, cancelCostHandler } = useContext(ExpensesContext);

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const costData = {
      description: name,
      amount,
      date: new Date(date),
      id: uuidv4(),
    };

    AddCost(costData);
    cancelCostHandler();
    setName('');
    setAmount('');
    setDate('');
  };

  return (
    <form className="cost-form" onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Name</label>
          <input type="text" value={name} onChange={nameChangeHandler} />
        </div>
      </div>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Price</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={amountChangeHandler}
          />
        </div>
      </div>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-cost__actions">
        <button type="submit">Add expense</button>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default CostForm;
