import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PostList from '../../components/posts/PostList';
import { listPosts, readBoard } from '../../modules/posts';
import { readPost } from '../../modules/post';

const PostListContainer = ({ match, history, location }) => {
  const { postId } = match.params;
  console.log(postId);
  const dispatch = useDispatch();
  const {
    posts,
    error,
    loading,
    user,
    data,
    boards,
    post,
    postsdata,
  } = useSelector(({ posts, loading, user, post }) => ({
    posts: posts.posts,
    error: posts.error,
    loading: loading['posts/READ_BOARD'],
    user: user.user,
    data: posts.data,
    boards: posts.boards,
    post: post.post,
    postsdata: posts.postsdata,
  }));
  //게시판 목록 불러오기
  useEffect(() => {
    dispatch(readBoard());
  }, [dispatch]);
  // 각 게시판 별 게시물들 불러오기
  useEffect(() => {
    dispatch(listPosts(postId));
  }, [dispatch, postId]);

  return (
    <PostList
      postId={postId}
      loading={loading}
      error={error}
      boards={boards}
      posts={posts}
      data={data}
      post={post}
      postsdata={postsdata}
      showWriteButton={user}
    />
  );
};

export default withRouter(PostListContainer);
