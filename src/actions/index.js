import { getValuesIntervalWithDelayService } from '../service/values-service';

const dataRequested = (boolLoaded) => {
  return {
    type: 'FETCH_DATA_REQUEST',
    payload: boolLoaded
  };
};

const dataLoaded = (data) => {
  return {
    type: 'FETCH_DATA_SUCCES',
    payload: data
  };
};

const dataError = (error) => {
  return {
    type: 'FETCH_DATA_ERROR',
    payload: error
  };
};

export const fetchData = (delay, interval) => (dispatch) => {
  dispatch(dataRequested(true));
  getValuesIntervalWithDelayService(delay, interval)
    .then((data) => dispatch(dataLoaded(data)))
    .catch((error) => dispatch(dataError(error)))
    .finally(() => dispatch(dataRequested(false)));
};
