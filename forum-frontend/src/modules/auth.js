import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
const CHANGE_FILED = 'auth/CHANGE_FILED';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

export const changeFiled = createAction(
  CHANGE_FILED,
  ({ form, key, value }) => ({
    form, //register, login
    key, //username, passowrd, passwordcomfirm
    value, //실제 바꾸려는 값
  }),
);
export const intializeForm = createAction(INITIALIZE_FORM, (form) => form);
//register, login

const initialState = {
  register: {
    username: '',
    password: '',
    passwordConfirm: '',
  },
  login: {
    username: '',
    passoword: '',
  },
};

const auth = handleActions(
  {
    [CHANGE_FILED]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        draft[form][key] = value;
        // state.register.username 바꿈
      }),
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
    }),
  },
  initialState,
);

export default auth;
