import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import PostListContainer from '../containers/posts/PostListContainer';
import PaginationContainer from '../containers/posts/PaginationContainer';
import UserTagVerticalList from '../components/post/UserTagVerticalList';

const PostListPage = () => {
  return (
    <>
      <HeaderContainer />
      <PostListContainer />
      <PaginationContainer />
      <UserTagVerticalList></UserTagVerticalList>
    </>
  );
};

export default PostListPage;
