import qs from 'qs';
import client from './client';

// 게시판 목록 불러오기
export const getBoard = (posts) => (posts = client.get(`/board`));

// 글쓰기
export const writePost1 = ({ title, pk, content }) =>
  client.post('/post', qs.stringify({ title, pk, content }));
// 댓글 쓰기
export const writePost = ({ title, pk, content }) => {
  const queryString = qs.stringify({
    title,
    pk,
    content,
  });
  return client.post('/post', queryString);
};
export const writeCommnet = ({ key, comment }) => {
  const queryString = qs.stringify({
    key,
    comment,
  });
  return client.post('/api/posts', queryString);
};

export const readComment = (id) => client.get(`reply?pk=${id}`);

export const readPost = (id) => client.get(`/post?pk=${id}`);

export const updatePost = ({ id, title, body, tags }) =>
  client.patch(`/api/posts/${id}`, {
    title,
    body,
    tags,
  });

export const removePost = (id) => client.delete(`/api/posts/${id}`);
