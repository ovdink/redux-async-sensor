import React, { useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';

import Indicators from '../../components/Indicators';
import Limits from '../../components/Limits';
import Values from '../../components/Values';
import ButtonColumn from '../../components/Button-column';

import { staticData } from '../../constans/static-data';

import { fetchDataStarted, intervalStopped, initialData } from '../../actions';

import './SensorContainer.scss';

const SensorContainer = (props) => {
  const { randomValue, fetchDataStarted, intervalStopped, initialData } = props;
  const state = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initialData(staticData));
  }, []);

  return (
    <>
      <div className="sensor-container">
        <Indicators staticData={state.initialData} />
        <Limits staticData={state.initialData} />
        <Values staticData={state.initialData} randomValue={randomValue} />
        <ButtonColumn
          staticData={state.initialData}
          fetchData={fetchDataStarted}
          timerId={state.timerId}
          intervalStopped={intervalStopped}
        />
      </div>
    </>
  );
};

const mapStateToProps = ({
  randomValue,
  loading,
  error,
  timerId,
  initialData
}) => {
  return {
    randomValue,
    loading,
    error,
    timerId,
    initialData
  };
};

const mapDispatchToProps = () => {
  return { fetchDataStarted, intervalStopped, initialData };
};

export default connect(mapStateToProps, mapDispatchToProps)(SensorContainer);
