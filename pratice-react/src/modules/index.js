import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import loading from './loading';
import comment from './comment';

const rootReducer = combineReducers({ loading, comment });

export function* rootSaga() {
  yield all([]);
}

export default rootReducer;
