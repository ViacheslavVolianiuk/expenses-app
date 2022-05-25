import React from 'react';
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
  };
  return (
    <div className="new-cost">
      <CostForm onSaveCostData={saveCostDataHandler} />
    </div>
  );
}

export default NewCost;
