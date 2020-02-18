import React from 'react';

import Button from '../Button';

import './ButtonColumn.scss';

const ButtonColumn = ({ staticData, fetchData, timerId, intervalStopped }) => {
  return (
    <div className="btn-column">
      <h3>Buttons</h3>
      {staticData.map(({ id, indicator }) => {
        return (
          <Button
            key={id}
            indicator={indicator}
            fetchData={fetchData}
            timerId={timerId}
            intervalStopped={intervalStopped}
          />
        );
      })}
    </div>
  );
};

export default ButtonColumn;
