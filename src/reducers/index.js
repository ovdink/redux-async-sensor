import { combineReducers } from 'redux';

import { randomValue, loading, error, timerId } from './sensors';
import { initialData } from './data';

const rootReducer = combineReducers({
  randomValue,
  loading,
  error,
  timerId,
  initialData
});

export default rootReducer;
