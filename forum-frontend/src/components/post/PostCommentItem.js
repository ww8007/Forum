import React, { useState } from 'react';
import styled from 'styled-components';
import palatte from '../../lib/styles/palette';
import PostCommentToggle from './PostCommentToggle';
const PostActionButtonBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
  margin-top: -1.5rem;
  width: 100%;
`;
const ActionButton = styled.button`
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
  onToggle,
  onInsert,
  onUpdate,
}) => {
  const [text, setText] = useState('');
  const onSubmit = (e) => {
    console.log(e);
  };
  const onChange = (e) => {
    setText(e.target.value);
  };
  const onEdit = () => {
    setText(comment.text);
  };
  return (
    <>
      <span>
        Date: {comment.postDate} username: {user.username}
      </span>
      <hr />

      <span>
        {comment.edit ? (
          <Input value={text} onChange={onChange}></Input>
        ) : (
          comment.text
        )}
        <PostActionButtonBlock>
          <ActionButton
            type={'submit'}
            onClick={() => {
              // onSearch(comment);
              onToggle(comment.id);
              onEdit();
              onUpdate(comment.id);
              setText('');
            }}
          >
            {comment.edit ? '등록' : '수정'}
          </ActionButton>
          <ActionButton
            onClick={() => {
              !comment.edit ? onRemove(comment.id) : onToggle(comment.id);
            }}
          >
            {!comment.edit ? '삭제' : '취소'}
          </ActionButton>
        </PostActionButtonBlock>
        <PostCommentToggle onInsert={onInsert} />
        <br />
      </span>
    </>
  );
};

export default PostCommentItem;
