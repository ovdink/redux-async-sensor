import React, { useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';

import Indicators from '../../components/Indicators';
import Limits from '../../components/Limits';
import Values from '../../components/Values';
import ButtonColumn from '../../components/Button-column';
import Button from '../../components/Button';

import { fetchDataStarted, intervalStopped } from '../../actions';

import './SensorContainer.scss';

const SensorContainer = (props) => {
  const { values, fetchDataStarted, intervalStopped } = props;
  const state = useSelector((state) => state);
  // const dispatch = useDispatch();

  useEffect(() => {
    console.log('STATE: ', state);
    console.log('PROPS: ', props);

    // dispatch(props.fetchDataStarted());
  }, []);

  return (
    <>
      <div className="sensor-container">
        <Indicators />
        <Limits />
        <Values values={values} />
        <ButtonColumn
          // key={id}
          // id={}
          fetchData={fetchDataStarted}
          timerId={state.timerId}
          intervalStopped={intervalStopped}
        />
      </div>
    </>
  );
};

const mapStateToProps = ({ values, loading, error, timerId }) => {
  return {
    values,
    loading,
    error,
    timerId
  };
};

const mapDispatchToProps = () => {
  return { fetchDataStarted, intervalStopped };
};

export default connect(mapStateToProps, mapDispatchToProps)(SensorContainer);
