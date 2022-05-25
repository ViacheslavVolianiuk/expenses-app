import React, { useState } from 'react';
import CostForm from './CostForm';
import './NewCost.css';
import { v4 as uuidv4 } from 'uuid';

function NewCost(props) {
  const saveCostDataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: uuidv4(),
    };
    props.onAddCost(costData);
    setIsFormVisible(false);
  };

  const inputCostDataHandler = () => {
    setIsFormVisible(true);
  };
  const cancelCostHandler = () => {
    setIsFormVisible(false);
  };

  const [isFormVisible, setIsFormVisible] = useState(false);
  return (
    <div className="new-cost">
      {!isFormVisible && (
        <button onClick={inputCostDataHandler}>Add new expense</button>
      )}
      {isFormVisible && (
        <CostForm
          onSaveCostData={saveCostDataHandler}
          onCancel={cancelCostHandler}
        />
      )}
    </div>
  );
}

export default NewCost;
