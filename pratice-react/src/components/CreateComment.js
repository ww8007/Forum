import React from 'react';

const CreateComment = ({ comment, onChangeField, onCreate }) => {
  const onChangeComment = (e) => {
    onChangeField({ title: 'comment', value: e.target.value });
  };
  return (
    <>
      <input
        type="text"
        placeholder="댓글을 입력하세요"
        value={comment}
        name="comment"
        onChange={onChangeComment}
      />
      <button onClick={onCreate}>추가하기</button>
    </>
  );
};

export default CreateComment;
