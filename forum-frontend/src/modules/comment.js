import { createAction, handleActions } from 'redux-actions';

const INSERT = 'comment/INSERT';
const REMOVE = 'comment/REMOVE';
const SET_ORIGINAL_COMMENT = 'comment/SET_ORIGINAL_COMMENT';
const TOGGLE = 'comment/TOGGLE';
let id = 3;

export const insert = createAction(INSERT, (text) => ({
  id: id++,
  text,
  postDate: new Date().toLocaleDateString(),
  edit: false,
}));
export const remove = createAction(REMOVE, (id) => id);
export const setOriginalPost = createAction(SET_ORIGINAL_COMMENT, (id) => id);
export const toggle = createAction(TOGGLE, (id) => id);

const initialState = {
  comments: [
    {
      id: 1,
      text: '정말 잘 봤어요!',
      postDate: new Date().toLocaleDateString(),
      edit: false,
    },
    {
      id: 2,
      text: '감사합니다.',
      postDate: new Date().toLocaleDateString(),
      edit: false,
    },
  ],
  selectComment: null,
  commentError: null,
};

const comment = handleActions(
  {
    [INSERT]: (state, { payload: text }) => ({
      ...state,
      comments: state.comments.concat(text),
    }),
    [REMOVE]: (state, { payload: id }) => ({
      ...state,
      comments: state.comments.filter((comment) => comment.id !== id),
    }),
    [SET_ORIGINAL_COMMENT]: (state, { payload: id }) => ({
      ...state,
      selectComment: state.comments.filter((search) => search.id === id),
      // id: selectComment.id,
      // text: comment.text,
      // postDate: new Date().toLocaleDateString(),
    }),
    [TOGGLE]: (state, { payload: id }) => ({
      ...state,
      selectComment: state.comments.map((comment) =>
        comment.id === id ? { ...comment, edit: !comment.edit } : comment,
      ),
      id: state.id,
      text: state.text,
      edit: state.edit,
      postDate: new Date().toLocaleDateString(),
    }),
  },
  initialState,
);

export default comment;
