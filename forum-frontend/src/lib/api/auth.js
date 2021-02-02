import client from './client';
import qs from 'query-string';
// 로그인
export const login = ({ username, password }) =>
  client.post('/api/auth/login', qs.stringify({ username, password }));

// 회원가입
export const register = ({ username, password }) =>
  client.post('/api/auth/register', { username, password });

// 로그인 상태 확인
export const check = () => client.get('/api/auth/check');
