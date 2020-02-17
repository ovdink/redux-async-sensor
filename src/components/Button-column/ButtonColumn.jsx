import React from 'react';

import Button from '../Button';

import './ButtonColumn.scss';

const ButtonColumn = ({ fetchData, timerId, intervalStopped }) => {
  return (
    <div className="btn-column">
      <h3>Buttons</h3>
      <Button
        fetchData={fetchData}
        timerId={timerId}
        intervalStopped={intervalStopped}
      />
      <p>0</p>
      <p>0</p>
    </div>
  );
};

export default ButtonColumn;
