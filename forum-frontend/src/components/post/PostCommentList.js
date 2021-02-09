import React, { useState } from 'react';
import styled from 'styled-components';

const comments = [
  {
    id: 1,
    comment: '좋아요',
  },
  {
    id: 2,
    comment: '싫어요',
  },
];
// 전체 코멘트 블락
const CommentListBlock = styled.div`
  border: 1px solid black;
`;
// 대댓글 기능

const PostCommentList = () => {
  const [check, setCheck] = useState(false);
  function onToggle() {
    return setCheck(!check);
  }
  return (
    <CommentListBlock>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment}</li>
        ))}
      </ul>
    </CommentListBlock>
  );
};

export default PostCommentList;
