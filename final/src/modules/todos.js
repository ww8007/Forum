import { createAction, handleActions } from 'redux-actions';

const INSERT = 'todos/INSERT';
const REMOVE = 'todos/REMOVE';
const TOGGLE = 'todos/TOGGLE';
const REINSERT = 'todos/REINSERT';
let id = 3;

export const insert = createAction(INSERT, (text) => ({
  id: id++,
  text,
  done: false,
}));
export const remove = createAction(REMOVE, (id) => id);
export const toggle = createAction(TOGGLE, (id) => id);
export const reInsert = createAction(REINSERT, (text) => ({
  text,
}));

const initialState = {
  todos: [
    {
      id: 1,

      text: '안녕하세요',
      done: false,
    },
    {
      id: 2,

      text: '잘가요',
      done: true,
    },
  ],
};

const todos = handleActions(
  {
    [INSERT]: (state, { payload: text }) => ({
      ...state,
      todos: state.todos.concat(text),
    }),
    [REMOVE]: (state, { payload: id }) => ({
      ...state,
      todos: state.todos.filter((todo) => todo.id !== id),
    }),
    [TOGGLE]: (state, { payload: id }) => ({
      ...state,
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    }),
    [REINSERT]: (state, { payload: text }) => ({
      ...state,
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, text: text } : text,
      ),
    }),
  },
  initialState,
);

export default todos;