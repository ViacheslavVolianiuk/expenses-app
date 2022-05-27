import React, { useState, useContext } from 'react';
import CostForm from './CostForm';
import './NewCost.css';
import ExpensesContext from '../Context/ExpensesContext';

function NewCost() {
  const { isFormVisible, inputCostDataHandler, cancelCostHandler } =
    useContext(ExpensesContext);

  return (
    <div className="new-cost">
      {!isFormVisible && (
        <button onClick={inputCostDataHandler}>Add new expense</button>
      )}
      {isFormVisible && <CostForm onCancel={cancelCostHandler} />}
    </div>
  );
}

export default NewCost;
