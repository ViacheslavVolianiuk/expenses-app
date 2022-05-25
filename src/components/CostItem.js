import React, { useState } from 'react';
import './CostItem.css';
import Card from './Card';

function CostItem({ date, description, amount }) {
  const [desc, setDesc] = useState(description);
  const [amnt, setAmnt] = useState(amount);
  const handleClick = () => {
    setDesc(window.prompt('Print somthing to change name:'));
    setAmnt(window.prompt('Print somthing to change price:'));
  };

  return (
    <Card>
      <div className="cost-item__date">
        <div>{date.getFullYear()}</div>
        <div>{date.toLocaleString('en-GB', { month: 'long' })}</div>
        <div>{date.getDay()}</div>
      </div>
      <div className="cost-item__description">
        <h2>{desc}</h2>
        <div className="cost-item__price">
          <span>$</span>
          {amnt}
        </div>
        <button onClick={handleClick}>Change somthing</button>
      </div>
    </Card>
  );
}

export default CostItem;
