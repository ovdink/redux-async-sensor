import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import './Button.scss';

const Button = ({ id, fetchData, timerId, intervalStopped }) => {
  const [isToggled, setToggled] = useState(false);
  const dispatch = useDispatch();

  const startStopSwitcher = () => {
    setToggled(!isToggled);
    if (!isToggled) dispatch(fetchData(1000, 1000, id));
    else dispatch(intervalStopped(timerId));
  };

  return (
    <button className="switch-button" onClick={startStopSwitcher}>
      {isToggled ? 'STOP' : 'START'}
    </button>
  );
};

export default Button;
