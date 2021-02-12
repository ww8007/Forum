import React, { useState } from 'react';
import styled from 'styled-components';
import PostCommentItem from './PostCommentItem';
import palette from '../../lib/styles/palette';
import { stringify } from 'qs';
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

const Button = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;
  background: ${palette.cyan[5]};
  &:hover {
    background: ${palette.cyan[4]};
  }
  float: right;
`;

const PostCommentList = ({
  comments,
  onRemove,
  onInsert,
  user,
  onSearch,
  selectComment,
  onToggle,
  onUpdate,
}) => {
  const [text, setText] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    onInsert(text);
    setText('');
  };
  const onChange = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <Input
          type="text"
          value={text}
          placeholder="댓글을 입력하세요"
          onChange={onChange}
        />
        <Button cyan type={'submit'}>
          등록
        </Button>
      </form>
      <br />
      <br />
      <div>
        {comments.map((comment) => (
          <PostCommentItem
            key={comment.id}
            onRemove={onRemove}
            comment={comment}
            selectComment={selectComment}
            user={user}
            onSearch={onSearch}
            onToggle={onToggle}
            onInsert={onInsert}
            onUpdate={onUpdate}
          ></PostCommentItem>
        ))}
      </div>
    </>
  );
};

export default PostCommentList;
