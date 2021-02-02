import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as api from '../lib/api';
// 액션 타입 생성
const CHANGE_FILED = 'auth/CHANGE_FILED';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

// 함수를 이용한 타입 생성

const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = createRequestActionTypes(
  'auth/REGISTER',
);

const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createAction('auth/LOGIN');

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

export const register = createAction(REGISTER, ({ username, password }) => ({
  username,
  password,
}));

export const login = createAction(LOGIN, ({ username, password }) => ({
  username,
  password,
}));
// 초기상태 부 (auth, authError 설정하여서 인증 에러 잡아내기)
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
  auth: null,
  authError: null,
};

// 사가 생성

const registerSaga = createRequestSaga(REGISTER, api.register);
const loginSaga = createRequestSaga(LOGIN, api.login);
export function* authSaga() {
  yield takeLatest(registerSaga);
  yield takeLatest(loginSaga);
}

const auth = handleActions(
  {
    // 타이핑
    [CHANGE_FILED]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        draft[form][key] = value;
        // state.register.username 바꿈
      }),
    // 화면 전환 : 새페이지
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
      authError: null, // 폼 전환 시 회원 인증 에러 초기화
    }),
    // 회원가입
    [REGISTER_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth,
    }),
    [REGISTER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
    // 로그인 부
    [LOGIN_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth,
    }),
    [LOGIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
  },
  initialState,
);

export default auth;
