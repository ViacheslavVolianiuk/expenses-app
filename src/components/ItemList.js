import React, { useContext, useState } from 'react';
import CostItem from './CostItem';
import CostsFilter from './CostsFilter';
import './ItemList.css';
import ExpensesContext from './Context/ExpensesContext';
import CostsDiagram from './CostsDiagram';

function ItemList() {
  const { filteredCosts, selectedYear, setSelectedYear } =
    useContext(ExpensesContext);

  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  return (
    <div>
      <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
      <CostsDiagram />

      <div className="item-list">
        {filteredCosts.length === 0 ? (
          <p
            style={{
              fontSize: '3rem',
              color: 'rgb(162, 136, 221)',
              textAlign: 'center',
            }}
          >
            No expenses this year
          </p>
        ) : (
          filteredCosts.map((item, index) => {
            return (
              <CostItem
                key={index}
                date={item.date}
                description={item.description}
                amount={item.amount}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default ItemList;
