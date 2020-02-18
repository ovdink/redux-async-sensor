import React from 'react';

import './Indicators.scss';

const Indicators = ({ staticData }) => {
  return (
    <div className="indicators">
      <h3>Indicators</h3>
      {staticData.map(({ id, indicator }) => {
        return <p key={id}>{indicator}</p>;
      })}
    </div>
  );
};

export default Indicators;
