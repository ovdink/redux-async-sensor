import React from 'react';

import './Values.scss';

const Values = ({ staticData }) => {
  return (
    <div className="values">
      <h3>Values</h3>
      {staticData.map(({ id, value, dangerous }) => {
        return (
          <p className={dangerous ? 'values-dang' : ''} key={id}>
            {value}
          </p>
        );
      })}
    </div>
  );
};

export default Values;
