import React, { useState } from 'react';
import PostCommentItem from './PostCommentItem';
// import styled from 'styled-components';

const PostCommentList = ({ comments, onInsert, onRemove }) => {
  const [text, setText] = useState('');
  const onSumbit = (e) => {
    e.prevnetDefault();
    onInsert(text);
    setText('');
  };
  const onChange = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <form onSubmit={onSumbit}>
        <button type={'submit'}>등록</button>
        <input
          type="text"
          value={text}
          onChange={onChange}
          placeholder="댓글을 입력하세요..."
        />
      </form>
      <div>
        {comments.map((comment) => (
          <PostCommentItem
            comment={comment}
            key={comment.id}
            onRemove={onRemove}
          />
        ))}
      </div>
    </>
  );
};

export default PostCommentList;
