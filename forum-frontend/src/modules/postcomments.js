import { createAction, handleActions } from 'redux-actions';

const INSERT = 'postcomment/INSERT';
const REMOVE = 'postcomment/REMOVE';

let id = 3;

export const insert = createAction((comment) => ({
  id: id++,
  comment,
}));
export const remove = createAction((id) => id);

const initialState = {
  comments: [
    {
      id: 1,
      comment: '안녕하세요',
      postDate: new Date().toLocaleDateString(),
    },
    {
      id: 2,
      comment: '반가워요',
      postDate: new Date().toLocaleDateString(),
    },
  ],
};

const postcomment = handleActions(
  {
    [INSERT]: (state, { payload: comment }) => ({
      ...state,
      comments: state.comments.concat(comment),
    }),
    [REMOVE]: (state, { payload: id }) => ({
      ...state,
      comments: state.comments.filter((comment) => comment.id !== id),
    }),
  },
  initialState,
);

export default postcomment;
