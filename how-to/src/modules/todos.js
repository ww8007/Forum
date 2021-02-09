import { createAction, handleActions } from 'redux-actions';

const CHAGNE_INPUT = 'todos/CHAGNE_INPUT';
const INSERT = 'todos/INSERT';
const REMOVE = 'todos/REMOVE';
const TOGGLE = 'todos/TOGGLE';

export const changeInput = createAction(CHAGNE_INPUT, (target) => target);

let id = 3;

export const insert = createAction(INSERT, (text) => ({
  id: id++,
  text,
  done: false,
}));
export const toggle = createAction(TOGGLE, (id) => id);
export const remove = createAction(REMOVE, (id) => id);

const initialState = {
  input: '',
  todos: [
    {
      id: 1,
      text: '리덕스 기초 배우기',
      done: false,
    },
    {
      id: 2,
      text: '안녕하세요',
      done: true,
    },
  ],
};

const todos = handleActions(
  {
    [CHAGNE_INPUT]: (state, { payload: input }) => ({
      ...state,
      input,
    }),
    [INSERT]: (state, { payload: todo }) => ({
      ...state,
      todos: state.todos.concat(todo),
    }),
    [TOGGLE]: (state, { payload: id }) => ({
      ...state,
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    }),
    [REMOVE]: (state, { payload: id }) => ({
      ...state,
      todos: state.todos.filter((todo) => todo.id !== id),
    }),
  },
  initialState,
);

export default todos;
