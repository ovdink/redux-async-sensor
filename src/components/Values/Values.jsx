import React from 'react';

import './Values.scss';

const Values = ({ values }) => {
  return (
    <div className="values">
      <h3>Values</h3>
      <p>{values}</p>
      <p>1</p>
      <p>0.3</p>
    </div>
  );
};

export default Values;
