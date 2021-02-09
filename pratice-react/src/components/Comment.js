import React from 'react';
import styled from 'styled-components';

const CommentBlock = styled.li`
  border: 1px solid black;
`;

const Comment = ({ comments, loading, error }) => {
  if (error) {
    console.log(error);
  }
  if (loading || !comments) {
    return null;
  }
  return (
    <div>
      <ul>
        {comments.map((comment) => (
          <CommentBlock key={comment.id}>{comment}</CommentBlock>
        ))}
      </ul>
    </div>
  );
};

export default Comment;
