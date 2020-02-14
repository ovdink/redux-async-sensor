import React, { useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';

import Indicators from '../../components/Indicators';
import Limits from '../../components/Limits';
import Values from '../../components/Values';

import { fetchData } from '../../actions/';

import './SensorContainer.scss';

const SensorContainer = (props) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(state);
    console.log(props);
    dispatch(props.fetchData());
    // await console.log(dispatch(props.fetchData()));

    // console.log('und?', props.fetchData(2000, 1500));
  }, []);

  return (
    <div className="sensor-container">
      <Indicators />
      <Limits />
      <Values />
    </div>
  );
};

const mapStateToProps = ({ values, loading, error }) => {
  return {
    values,
    loading,
    error
  };
};

const mapDispatchToProps = () => {
  return { fetchData };
};

export default connect(mapStateToProps, mapDispatchToProps)(SensorContainer);
