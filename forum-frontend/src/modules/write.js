import { handleActions, createAction } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import * as api from '../lib/api/posts';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';

const INITIALIZE = 'write/INITIALIZE';
const CHANGE_FILELD = 'write/CHANGE_FILELD';
const SET_ORIGINAL_POST = 'write/SET_ORIGINAL_POST';

const [
  WRITE_POST,
  WRITE_POST_SUCCESS,
  WRITE_POST_FAILURE,
] = createRequestActionTypes('write/WRITE_POST');

const [
  UPDATE_POST,
  UPDATE_POST_SUCCESS,
  UPDATE_POST_FAILURE,
] = createRequestActionTypes('write/UPDATE_POST');

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
export const setOriginalPost = createAction(SET_ORIGINAL_POST, (post) => post);
export const updatePost = createAction(
  UPDATE_POST,
  ({ id, title, body, tags }) => ({
    title,
    body,
    tags,
    id,
  }),
);

const wirtePostSaga = createRequestSaga(WRITE_POST, api.writePost);
const updatePostSags = createRequestSaga(UPDATE_POST, api.updatePost);

export function* wrtieSaga() {
  yield takeLatest(WRITE_POST, wirtePostSaga);
  yield takeLatest(UPDATE_POST, updatePostSags);
}

const initalState = {
  title: '',
  body: '',
  tags: [],
  post: null,
  postError: null,
  originalPostId: null,
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
    [SET_ORIGINAL_POST]: (state, { payload: post }) => ({
      ...state,
      title: post.title,
      body: post.body,
      tags: post.tags,
      originalPostId: post._id,
    }),
    [UPDATE_POST_SUCCESS]: (state, { payload: post }) => ({
      ...state,
      post,
    }),
    [UPDATE_POST_FAILURE]: (state, { payload: postError }) => ({
      ...state,
      postError,
    }),
  },

  initalState,
);

export default write;
