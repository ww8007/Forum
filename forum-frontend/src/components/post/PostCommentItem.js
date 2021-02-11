import React, { useState } from 'react';
import styled from 'styled-components';
import palatte from '../../lib/styles/palette';

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

const Input = styled.input`
  resize: none;
  padding: 1rem 1rem 1.5rem;
  outline: none;
  border: 1px solid rgb(233, 236, 239);
  margin-bottom: 1.5rem;
  width: 100%;
  border-radius: 4px;
  min-height: 6.125rem;
  font-size: 1rem;
  color: rgb(33, 37, 41);
  line-height: 1.75;
`;

const PostCommentItem = ({
  comment,
  onRemove,
  user,
  onSearch,
  selectComment,
  onToggle,
}) => {
  const [text, setText] = useState('');
  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <span>
        Date: {comment.postDate} username: {user.username}
      </span>
      <hr />
      <span>
        {comment.text}
        <PostActionButtonBlock>
          <ActionButton
            onClick={() => {
              onSearch(comment.id);
              console.log(selectComment);
            }}
          >
            수정
          </ActionButton>
          <ActionButton onClick={() => onRemove(comment.id)}>삭제</ActionButton>
        </PostActionButtonBlock>
        {selectComment.id}
        <br />
      </span>
    </>
  );
};

export default PostCommentItem;
