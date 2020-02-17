import React, { Component, useEffect, useState } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';

import Indicators from '../../components/Indicators';
import Limits from '../../components/Limits';
import Values from '../../components/Values';

import { fetchDataStarted } from '../../actions';

import './SensorContainer.scss';

class SensorContainer extends Component {
  componentDidMount() {
    this.props.fetchDataStarted();
  }

  render() {
    console.log('rendering');
    return <div></div>;
  }
}

const mapStateToProps = ({ values, loading, error }) => {
  return {
    values,
    loading,
    error
  };
};

const mapDispatchToProps = () => {
  return { fetchDataStarted };
};

export default connect(mapStateToProps, mapDispatchToProps)(SensorContainer);
