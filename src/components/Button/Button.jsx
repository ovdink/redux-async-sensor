import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const Button = ({ fetchData, timerId, intervalStopped }) => {
  const [isToggled, setToggled] = useState(false);
  const dispatch = useDispatch();

  const startStopSwitcher = () => {
    setToggled(!isToggled);
    if (!isToggled) dispatch(fetchData(1000, 1000));
    else dispatch(intervalStopped(timerId));
  };

  return (
    <button onClick={startStopSwitcher}>{isToggled ? 'STOP' : 'START'}</button>
  );
};

export default Button;
