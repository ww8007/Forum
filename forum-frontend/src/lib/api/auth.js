import client from './client';
import qs from 'qs';
import { Redirect } from 'react-router-dom';

client.defaults.withCredentials = true;
function setCookie(name, value, options = {}) {
  options = {
    path: '/',
    // 필요한 경우, 옵션 기본값을 설정할 수도 있습니다.
    ...options,
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie =
    encodeURIComponent(name) + '=' + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += '; ' + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += '=' + optionValue;
    }
  }

  document.cookie = updatedCookie;
}
setCookie('sessionid', 'nz44eps87sfp7bfrobjitihg08epwb54', {
  domain: 'ec2-3-35-233-97.ap-northeast-2.compute.amazonaws.com',
});
// Example of use:
setCookie('user', 'John', { secure: true, 'max-age': 3600 });

// client.defaults.withCredentials = true;
// 로그인

export const login = ({ username, password }) =>
  client.post('/login', qs.stringify({ username, password }));

// 회원가입

export const register = ({ username, email, password }) =>
  client.post('/register', qs.stringify({ username, email, password }));

// 로그인 상태 확인
export const check = () => {
  client.get('login');
};
// export const login = ({ username, password }) =>
//   client.post('/api/auth/login', { username, password });

// // 회원가입
// export const register = ({ username, password }) =>
//   client.post('/api/auth/register', { username, password });

// // 로그인 상태 확인
// export const check = () => client.get('/api/auth/check');

// 로그아웃
export const logout = () => client.get('/logout');
