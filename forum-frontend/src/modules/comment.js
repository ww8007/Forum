import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as postsAPI from '../lib/api/posts';
import { takeLatest } from 'redux-saga/effects';

const [
  READ_COMMENT,
  READ_COMMENT_SUCCESS,
  READ_COMMENT_FAILURE,
] = createRequestActionTypes('comment/READ_COMMNET');

const UNLOAD_COMMENT = 'comment/UNLOAD_POST';

export const readComment = createAction(READ_COMMENT, (id) => id);
export const unloadComment = createAction(UNLOAD_COMMENT);

const readCommentSaga = createRequestSaga(READ_COMMENT, postsAPI.readComment);
export function* commentSaga() {
  yield takeLatest(READ_COMMENT, readCommentSaga);
}

const initialState = {
  comment: null,
  error: null,
};

const comment = handleActions(
  {
    [READ_COMMENT_SUCCESS]: (state, { payload: comment }) => ({
      ...state,
      comment,
    }),
    [READ_COMMENT_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [UNLOAD_COMMENT]: () => initialState,
  },
  initialState,
);

export default comment;
