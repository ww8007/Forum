import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as postsAPI from '../lib/api/posts';
import { takeLatest } from 'redux-saga/effects';

// const [
//   LIST_POSTS,
//   LIST_POSTS_SUCCESS,
//   LIST_POSTS_FAILURE,
// ] = createRequestActionTypes('posts/LIST_POSTS');

const [
  READ_BOAD,
  READ_BOAD_SUCCESS,
  READ_BOAD_FAILURE,
] = createRequestActionTypes('posts/READ_BOARD');

// export const listPosts = createAction(
//   LIST_POSTS,
//   ({ tag, username, page }) => ({ tag, username, page }),
// );

export const readBoard = createAction(READ_BOAD);

// const listPostsSaga = createRequestSaga(LIST_POSTS, postsAPI.listPosts);
const readBoardSaga = createRequestSaga(READ_BOAD, postsAPI.getBoard);
export function* postsSaga() {
  // yield takeLatest(LIST_POSTS, listPostsSaga);
  yield takeLatest(READ_BOAD, readBoardSaga);
}

const initialState = {
  posts: null,
  data: null,
  error: null,
  lastPage: 1,
};

const posts = handleActions(
  {
    // [LIST_POSTS_SUCCESS]: (state, { payload: posts, meta: response }) => ({
    //   ...state,
    //   posts,
    //   lastPage: parseInt(response.headers['last-page'], 10), // 문자열을 숫자로 변환
    // }),
    // [LIST_POSTS_FAILURE]: (state, { payload: error }) => ({
    //   ...state,
    //   error,
    // }),
    [READ_BOAD_SUCCESS]: (state, { payload: posts, meta: response }) => ({
      ...state,
      posts,
      data: posts.data,
      lastPage: parseInt(response.headers['last-page'], 10), // 문자열을 숫자로 변환
    }),
    // (data = posts.data)
    // console.log(data)
    [READ_BOAD_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default posts;
