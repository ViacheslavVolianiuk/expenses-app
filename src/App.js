import React, { useState } from 'react';
import ItemList from './components/ItemList';
import NewCost from './components/NewCost/NewCost';
import INITIAL_COSTS from './components/Data/InitializationData';

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
