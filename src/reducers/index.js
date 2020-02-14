import { combineReducers } from 'redux';

import { values, loading, error } from './sensors';

const rootReducer = combineReducers({ values, loading, error });

export default rootReducer;
