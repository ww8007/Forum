import { createAction, handleActions } from 'redux-actions';

const CHANGE_INPUT = 'CHANGE_INPUT';
const INSERT = 'INSERT';
const TOGGLE = 'TOGGLE';
const REMVOE = 'REMVOE';

export const changeInput = createAction(CHANGE_INPUT, (input) => input);
let id = 3;
export const insert = createAction(INSERT, (text) => ({
  id: id++,
  text,
  done: false,
}));
export const toggle = createAction(TOGGLE, (text) => text);
export const remove = createAction(REMVOE, (text) => text);

const initialState = {
  input: '',
  todos: [
    {
      id: 1,
      text: 'hi',
      done: false,
    },
    {
      id: 2,
      text: 'bye',
      done: true,
    },
  ],
};
const todos = handleActions(
  {
    [CHANGE_INPUT]: (state, action) => ({
      ...state,
      input: action.payload,
    }),
    [INSERT]: (state, action) => ({
      ...state,
      todos: state.todos.concat(action.payload),
    }),
    [TOGGLE]: (state, action) => ({
      ...state,
      todos: state.todos.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo,
      ),
    }),
    [REMVOE]: (state, action) => ({
      ...state,
      todos: state.todos.filter((todo) => todo.id !== action.payload),
    }),
  },
  initialState,
);

export default todos;
