import { getValuesIntervalWithDelayService } from '../service/values-service';

export const initialData = (data) => {
  return {
    type: 'SET_INITIAL_DATA',
    payload: data
  };
};

const dataRequested = (boolLoaded) => {
  return {
    type: 'FETCH_DATA_REQUEST',
    payload: boolLoaded
  };
};

const dataLoaded = (data, id) => {
  return {
    type: 'FETCH_DATA_SUCCESS',
    payload: {
      data,
      id
    }
  };
};

const dataError = (error) => {
  return {
    type: 'FETCH_DATA_ERROR',
    payload: error
  };
};

const intervalStart = (timerId) => {
  return {
    type: 'INTERVAL_TIME_STARTED',
    payload: timerId
  };
};

export const intervalStopped = (timerId) => {
  return {
    type: 'INTERVAL_TIME_STOPPED',
    payload: timerId
  };
};

export const fetchDataStarted = (delay = 2000, interval = 3000, id) => (
  dispatch
) => {
  let timerId = null;

  dispatch(dataRequested(true));

  clearInterval(timerId);

  timerId = setInterval(() => {
    getValuesIntervalWithDelayService(delay)
      .then((data) => dispatch(dataLoaded(data, id)))
      .catch((error) => dispatch(dataError(error)))
      .finally(() => dispatch(dataRequested(false)));
  }, interval);

  dispatch(intervalStart(timerId));
};
