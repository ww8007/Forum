import { createAction, handleActions } from 'redux-actions';

const INSERT = 'comment/INSERT';
const REMOVE = 'comment/REMOVE';

let id = 3;

export const insert = createAction(INSERT, (text) => ({
  id: id++,
  text,
  postDate: new Date().toLocaleDateString(),
}));
export const remove = createAction(REMOVE, (id) => id);

const initialState = {
  comments: [
    {
      id: 1,
      text: '리덕스 기초 배우기',
      postDate: new Date().toLocaleDateString(),
    },
    {
      id: 2,
      text: '안녕하세요',
      postDate: new Date().toLocaleDateString(),
    },
  ],
};

const comment = handleActions(
  {
    [INSERT]: (state, { payload: text }) => ({
      ...state,
      comments: state.comments.concat(text),
    }),
    [REMOVE]: (state, { payload: id }) => ({
      ...state,
      comments: state.comments.filter((todo) => todo.id !== id),
    }),
  },
  initialState,
);

export default comment;
