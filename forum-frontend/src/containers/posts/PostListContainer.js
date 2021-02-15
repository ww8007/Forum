import React, { useEffect } from 'react';
import qs from 'qs';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PostList from '../../components/posts/PostList';
import { listPosts, readBoard } from '../../modules/posts';

const PostListContainer = ({ location }) => {
  const dispatch = useDispatch();
  const { posts, error, loading, user, data } = useSelector(
    ({ posts, loading, user }) => ({
      posts: posts.posts,
      error: posts.error,
      loading: loading['posts/LIST_POSTS'],
      user: user.user,
      data: posts.data,
    }),
  );
  useEffect(() => {
    const { tag, username, page } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    dispatch(listPosts({ tag, username, page }));
  }, [dispatch, location.search]);
  useEffect(() => {
    dispatch(readBoard());

    console.log(data);
  }, [dispatch]);
  return (
    <PostList
      loading={loading}
      error={error}
      posts={posts}
      showWriteButton={user}
    />
  );
};

export default withRouter(PostListContainer);
