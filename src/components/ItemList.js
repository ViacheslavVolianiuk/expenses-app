import React, { useState } from 'react';
import CostItem from './CostItem';
import CostsFilter from './CostsFilter';
import './ItemList.css';

function ItemList({ props }) {
  const [selectedYear, setSelectedYear] = useState('2021');
  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredCosts = props.filter(
    (item) => item.date.getFullYear() === +selectedYear
  );

  return (
    <div>
      <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
      <div className="item-list">
        {filteredCosts.map((item, index) => {
          return (
            <CostItem
              key={index}
              date={item.date}
              description={item.description}
              amount={item.amount}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ItemList;
