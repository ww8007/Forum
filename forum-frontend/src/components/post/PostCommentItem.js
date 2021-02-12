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
  onSubmitComment,
  onSubmit,
  selectComment,
  onChangeComment,
}) => {
  const [texts, setText] = useState('');
  const _id = comment.id;

  const onChange = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };
  const onEdit = () => {
    setText(comment.text);
    console.log(comment.text);
  };
  const { id, text } = comment;

  return (
    <>
      <div>
        <span>
          Date: {comment.postDate} username: {user.username}
        </span>
        <hr />

        {comment.edit ? (
          <Input value={texts} onChange={onChange}></Input>
        ) : (
          comment.text
        )}
        <PostActionButtonBlock>
          <ActionButton
            onClick={() => {
              // onSearch(comment);
              onToggle(comment.id);
              onEdit(comment.text);
            }}
          >
            {comment.edit ? onChangeComment({ id, text }) : null}
            {console.log(comment.text)}
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
      </div>
    </>
  );
};

export default PostCommentItem;
