import { combineReducers } from 'redux';

import { values, loading, error, timerId } from './sensors';

const rootReducer = combineReducers({ values, loading, error, timerId });

export default rootReducer;
