import client from './client';
import qs from 'qs';

// client.defaults.withCredentials = true;
// 로그인
document.cookie = 'user/name; Same-site=none';
export const login = ({ username, password }) =>
  client.post('/login', qs.stringify({ username, password }));

// 회원가입

export const register = ({ username, email, password }) =>
  client.post('/register', qs.stringify({ username, email, password }));

// 로그인 상태 확인
export const check = ({ username }) => {
  client.get('login', qs.stringify({ username }));
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
