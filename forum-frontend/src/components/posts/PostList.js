import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
import palette from '../../lib/styles/palette';
import SubInfo from '../common/SubInfo';
import Tags from '../common/Tags';
import { Link } from 'react-router-dom';

const PostListBlock = styled(Responsive)`
  margin-top: 3rem;
`;

const WritePostButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;
`;

const PostItemBlock = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  /* 맨 위 포스트는 padding-top 없음 */
  &:first-child {
    padding-top: 0;
  }
  & + & {
    border-top: 1px solid ${palette.gray[2]};
  }

  h2 {
    font-size: 1rem;
    margin-bottom: 0;
    margin-top: 0;
    &:hover {
      color: ${palette.gray[6]};
    }
  }
  p {
    margin-right: 2rem;
    margin-top: 2rem;
  }
`;

const SideBlock = styled.div`
  background-color: white;
  position: fixed;
  width: 200px;
  height: 100%;
  margin-left: -100px;
  margin-top: 50px;
`;

const PostItem = ({ post }) => {
  const { name } = post.fields;
  const { post_length } = post;
  const number = post_length;
  console.log(number);
  return (
    <PostItemBlock>
      <h2>
        <Link to={`/?pk=${post.pk}`}>{name}</Link>
      </h2>
      <SubInfo>{number}</SubInfo>
      {/* <h2>
        <Link to={`/@${user.username}/${_id}`}>{title}</Link>
      </h2>
        
      <SubInfo
        username={user.username}
        publishedDate={new Date(publishedDate)}
      />
      <Tags tags={tags} /> */}
    </PostItemBlock>
  );
};

const PostList = ({ posts, loading, error, showWriteButton, data }) => {
  // 에러 발생 시
  if (error) {
    return <PostListBlock>에러가 발생했습니다.</PostListBlock>;
  }

  return (
    <PostListBlock>
      <WritePostButtonWrapper>
        {showWriteButton && (
          <Button cyan to="/write">
            새 글 작성하기
          </Button>
        )}
      </WritePostButtonWrapper>
      {/*  로딩 중 아니고, 포스트 배열이 존재할 때만 보여줌 */}
      {console.log('posts', posts)}
      {console.log('data', data)}
      <SideBlock>
        {!loading && posts && (
          <div>
            {data.map((post) => (
              <PostItem post={post} key={post._id} />
            ))}
          </div>
        )}
      </SideBlock>
    </PostListBlock>
  );
};

export default PostList;
