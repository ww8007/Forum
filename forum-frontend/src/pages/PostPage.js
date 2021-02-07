import React from 'react';
import UserTagVerticalList from '../components/post/UserTagVerticalList';
import HeaderContainer from '../containers/common/HeaderContainer';
import PostViewerContainer from '../containers/post/PostViewerContainer';

const PostPage = () => {
  return (
    <>
      <HeaderContainer />
      <PostViewerContainer />
      <UserTagVerticalList />
    </>
  );
};

export default PostPage;
