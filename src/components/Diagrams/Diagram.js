import React from 'react';
import DiagraBar from './DiagramBar';
import './Diagram.css';

function Diagram(props) {
  return (
    <div className="diagram">
      {props.dataSets.map((dataSet) => (
        <DiagraBar
          key={dataSet.label}
          value={dataSet.value}
          maxValue={null}
          label={dataSet.label}
        />
      ))}
    </div>
  );
}

export default Diagram;
