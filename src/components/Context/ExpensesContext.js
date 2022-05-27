import { createContext, useState } from 'react';
import INITIAL_COSTS from '../Data/InitializationData';

const ExpensesContext = createContext();

export const ExpensesProvider = ({ children }) => {
  const [costs, setCosts] = useState(INITIAL_COSTS);

  const onAddCost = (cost) => {
    console.log(cost);
    setCosts([cost, ...costs]);
  };

  return (
    <ExpensesContext.Provider value={{ costs, onAddCost }}>
      {children}
    </ExpensesContext.Provider>
  );
};

export default ExpensesContext;
