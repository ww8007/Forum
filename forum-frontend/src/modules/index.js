import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import loading from './loading';
import auth, { authSaga } from './auth';
import user, { userSaga } from './user';
import write from './write';
const rootReducer = combineReducers({ auth, loading, user, write });

export function* rootSaga() {
  yield all([authSaga(), userSaga()]);
}

export default rootReducer;
