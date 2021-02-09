import { createAction, handleActions } from 'redux-actions';
import { createRequestActionTypes } from '../lib/createRequestSaga';

const INITIALIZE = 'comment/INITIALIZE';
const [
  WRTIE_COMMENT,
  WRTIE_COMMENT_SUCCESS,
  WRTIE_COMMENT_FAILURE,
] = createRequestActionTypes('comment/WRITE_COMMNET');
const CHANGE_FILED = 'comment/CHANGE_FILED';
const [
  UPDATE_COMMENT,
  UPDATE_COMMENT_SUCCESS,
  UPDATE_COMMENT_FAILURE,
] = createRequestActionTypes('comment/UPDATE_COMMENT'); // 코멘트 수정

export const initialize = createAction(INITIALIZE);
export const changeFiled = createAction(CHANGE_FILED, ({ key, value }) => ({
  key,
  value,
}));
export const writeComment = createAction(WRTIE_COMMENT, (comment) => comment);
export const updateComment = createAction(UPDATE_COMMENT);

const initialState = {
  comment: [],
  error: null,
  body: '',
};
const comment = handleActions(
  {
    [INITIALIZE]: (state) => initialState,
    [WRTIE_COMMENT_SUCCESS]: (state, { payload: comment }) => ({
      ...state,
      comment,
    }),
    [WRTIE_COMMENT_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [CHANGE_FILED]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    [UPDATE_COMMENT_SUCCESS]: (state, { payload: comment }) => ({
      ...state,
      comment,
    }),
    [UPDATE_COMMENT_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default comment;
