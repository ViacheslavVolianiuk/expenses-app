import React, { useContext } from 'react';
import ItemList from './components/ItemList';
import NewCost from './components/NewCost/NewCost';

import ExpensesContext, {
  ExpensesProvider,
} from './components/Context/ExpensesContext';

function App() {
  return (
    <ExpensesProvider>
      <div className="container">
        <h1>Expenses App</h1>
        <NewCost />
        <ItemList />
      </div>
    </ExpensesProvider>
  );
}

export default App;
