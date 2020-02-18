import React from 'react';

import './Limits.scss';

const Limits = ({ staticData }) => {
  return (
    <div className="limits">
      <h3>Limits</h3>
      {staticData.map(({ id, limit }) => {
        return <p key={id}>{limit}</p>;
      })}
    </div>
  );
};

export default Limits;
