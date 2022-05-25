import React, { useState } from 'react';
import ItemList from './components/ItemList';
import NewCost from './components/NewCost/NewCost';

const INITIAL_COSTS = [
  { id: 1, date: new Date(2021, 2, 12), description: 'MacBook', amount: 999 },
  { id: 2, date: new Date(2020, 1, 14), description: 'Car', amount: 356000 },
  { id: 3, date: new Date(2022, 3, 2), description: 'Gifts', amount: 3500 },
];

function App() {
  const [costs, setCosts] = useState(INITIAL_COSTS);

  const addCostHandler = (cost) => {
    console.log(cost);
    setCosts([cost, ...costs]);
  };
  return (
    <div className="container">
      <h1>Expenses App</h1>
      <NewCost onAddCost={addCostHandler} />
      <ItemList props={costs} />
    </div>
  );
}

export default App;
