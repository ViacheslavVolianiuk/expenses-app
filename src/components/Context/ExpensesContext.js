import { createContext, useState } from 'react';
import INITIAL_COSTS from '../Data/InitializationData';

const ExpensesContext = createContext();

export const ExpensesProvider = ({ children }) => {
  //Add cost
  const [costs, setCosts] = useState(INITIAL_COSTS);

  const AddCost = (cost) => {
    console.log(cost);
    setCosts([cost, ...costs]);
  };

  //Form visivility and buttons
  const [isFormVisible, setIsFormVisible] = useState(false);

  const cancelCostHandler = () => {
    setIsFormVisible(false);
  };
  const inputCostDataHandler = () => {
    setIsFormVisible(true);
  };

  //Form itself

  return (
    <ExpensesContext.Provider
      value={{
        costs,
        AddCost,
        isFormVisible,
        inputCostDataHandler,
        cancelCostHandler,
      }}
    >
      {children}
    </ExpensesContext.Provider>
  );
};

export default ExpensesContext;
