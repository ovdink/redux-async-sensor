import React from 'react';

import './Values.scss';

const Values = ({ staticData, randomValue }) => {
  return (
    <div className="values">
      <h3>Values</h3>

      {staticData.map(({ id, value }) => {
        return <p key={id}>{value}</p>;
      })}
      <p>random: {randomValue}</p>
    </div>
  );
};

export default Values;
