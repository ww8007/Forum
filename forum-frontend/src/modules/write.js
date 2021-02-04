import { createAction, handleActions } from 'redux-actions';

const INITIALIZE = 'write/INITIALIZE';
const CHANGE_FILELD = 'write/CHANGE_FILELD';

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FILELD, ({ key, value }) => ({
  key,
  value,
}));

const initalState = {
  title: '',
  body: '',
  tags: [],
};

const write = handleActions(
  {
    [INITIALIZE]: (state) => initalState,
    [CHANGE_FILELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
  },
  initalState,
);

export default write;
