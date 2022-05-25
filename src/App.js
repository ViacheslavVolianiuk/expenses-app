import { useState } from 'react';
import ItemList from './components/ItemList';
import NewCost from './components/NewCost/NewCost';

function App() {
  const costs = [
    { date: new Date(2021, 2, 12), description: 'MacBook', amount: 999 },
    { date: new Date(2020, 1, 14), description: 'Car', amount: 356000 },
    { date: new Date(2022, 3, 2), description: 'Gifts', amount: 3500 },
  ];
  const [item, setItem] = useState(costs);
  return (
    <div className="container">
      <h1>Expenses App</h1>
      <NewCost />
      <ItemList props={item} />
    </div>
  );
}

export default App;
