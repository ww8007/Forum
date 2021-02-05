import { handleActions, createAction } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import * as api from '../lib/api/posts';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';

const INITIALIZE = 'write/INITIALIZE';
const CHANGE_FILELD = 'write/CHANGE_FILELD';

const [
  WRITE_POST,
  WRITE_POST_SUCCESS,
  WRITE_POST_FAILURE,
] = createRequestActionTypes('write/WRITE_POST');

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FILELD, ({ key, value }) => ({
  key,
  value,
}));
export const writePost = createAction(WRITE_POST, ({ title, body, tags }) => ({
  title,
  body,
  tags,
}));

const wirtePostSaga = createRequestSaga(WRITE_POST, api.writePost);

export function* wrtieSaga() {
  yield takeLatest(WRITE_POST, wirtePostSaga);
}

const initalState = {
  title: '',
  body: '',
  tags: [],
  post: null,
  postError: null,
};

const write = handleActions(
  {
    [INITIALIZE]: (state) => initalState,
    [CHANGE_FILELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    [WRITE_POST]: (state) => ({
      ...state,
      post: null,
      postError: null,
    }),
    [WRITE_POST_SUCCESS]: (state, { payload: post }) => ({
      ...state,
      post,
    }),
    [WRITE_POST_FAILURE]: (state, { payload: postError }) => ({
      ...state,
      postError,
    }),
  },

  initalState,
);

export default write;
