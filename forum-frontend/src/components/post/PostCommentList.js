import React from 'react';
import styled from 'styled-components';
import PostcommentItem from './PostcommentItem';
const PostCommentListBlcok = styled.div``;

const PostCommentList = ({ comments, onRemove, currentUserId }) => {
  return (
    <PostCommentListBlcok>
      {comments.map((comment) => (
        <PostcommentItem key={comment.id}>{comment}</PostcommentItem>
      ))}
    </PostCommentListBlcok>
  );
};

export default PostCommentList;
