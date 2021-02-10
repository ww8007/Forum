import React from 'react';
import styled from 'styled-components';
import palatte from '../../lib/styles/palette';
const CommentItem = styled.div`
  border: 1px solid red;
`;
const PostActionButtonBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
  margin-top: -1.5rem;
`;
const ActionButton = styled.div`
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  color: ${palatte.gray[6]};
  font-weight: bold;
  border: none;
  outline: none;
  font-size: 0.875rem;
  cursor: pointer;
  &:hover {
    background: ${palatte.gray[1]};
    color: ${palatte.cyan[7]};
  }
  & + & {
    margin-left: 0.25rem;
  }
`;

const PostCommentItem = ({ comment, onRemove, user }) => {
  return (
    <>
      <span>
        Date: {comment.postDate} username: {user.username}
      </span>
      <hr />
      <span>{comment.text}</span>
      <hr />
      <PostActionButtonBlock>
        <ActionButton>수정</ActionButton>
        <ActionButton onClick={() => onRemove(comment.id)}>삭제</ActionButton>
      </PostActionButtonBlock>
    </>
  );
};

export default PostCommentItem;
