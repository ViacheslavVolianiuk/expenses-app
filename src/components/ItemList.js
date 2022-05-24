import React from 'react';
import CostItem from './CostItem';
import './ItemList.css';

function ItemList({ props }) {
  return (
    <div className="item-list">
      {props.map((item) => {
        return (
          <CostItem
            date={item.date}
            description={item.description}
            amount={item.amount}
          />
        );
      })}
    </div>
  );
}

export default ItemList;
