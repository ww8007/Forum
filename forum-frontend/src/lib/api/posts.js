import qs from 'qs';
import client from './client';

export const writePost = ({ title, body, tags }) =>
  client.post('/api/posts', { title, body, tags });

export const writeCommnet = ({ key, comment }) => {
  const queryString = qs.stringify({
    key,
    comment,
  });
  return client.post('/api/posts', queryString);
};

export const readPost = (id) => client.get(`/api/posts/${id}`);

export const readComment = (key) => client.get('api/posts/');

export const listPosts = ({ page, username, tag }) => {
  const queryString = qs.stringify({
    page,
    username,
    tag,
  });
  return client.get(`/api/posts?${queryString}`);
};

export const updatePost = ({ id, title, body, tags }) =>
  client.patch(`/api/posts/${id}`, {
    title,
    body,
    tags,
  });

export const removePost = (id) => client.delete(`/api/posts/${id}`);

export const readComment = (id) => client.get(`/api/posts/${id}`);
