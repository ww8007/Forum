import React from 'react';
import styled from 'styled-components';

const CommentBlock = styled.div`
  border: 1px solid red;
`;

const PostCommentItem = ({ comment, onRemove }) => {
  return (
    <CommentBlock>
      <span>{comment.text}</span>
      <button onClick={onRemove}>삭제</button>
    </CommentBlock>
  );
};

export default PostCommentItem;
