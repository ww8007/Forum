import qs from 'qs';
import client from './client';

// 게시판 목록 불러오기
export const getBoard = (posts) => (posts = client.get(`/board`));

// 글쓰기
export const writePost = ({ title, pk, content }) => {
  const queryString = qs.stringify({
    title,
    pk,
    content,
  });
  console.log('postitem', queryString);
  return client.post('/post', queryString);
};

// 댓글 쓰기
export const writeCommnet = ({ pk, content }) => {
  const queryString = qs.stringify({
    pk,
    content,
  });
  console.log(('query', queryString));
  return client.post('/reply', queryString);
};

// 댓글 삭제하기
export const deleteComment = (pk) => {
  const queryString = qs.stringify(pk);
  return client.delete('/reply', qs.stringify(pk));
};

export const readComment = (id) => client.get(`/reply?pk=${id}`);

export const readPost = (id) => client.get(`/post?pk=${id}`);

export const updatePost = ({ id, title, body, tags }) =>
  client.patch(`/api/posts/${id}`, {
    title,
    body,
    tags,
  });

export const removePost = (id) => client.delete(`/api/posts/${id}`);
