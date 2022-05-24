import React from 'react';
import './CostItem.css';

function CostItem({ date, description, amount }) {
  return (
    <div className="cost-item">
      <div className="cost-item__date">
        <div>{date.getFullYear()}</div>
        <div>{date.toLocaleString('en-GB', { month: 'long' })}</div>
        <div>{date.getDay()}</div>
      </div>
      <div className="cost-item__description">
        <h2>{description}</h2>
        <div className="cost-item__price">
          <span>$</span>
          {amount}
        </div>
      </div>
    </div>
  );
}

export default CostItem;
