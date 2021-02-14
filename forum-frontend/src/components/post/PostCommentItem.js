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
  onUpdateComment,
  onInsert,
  onRecomment,
}) => {
  const [text, setText] = useState('');
  const [edit, setEdit] = useState(false);
  const { id } = comment;

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSumbit = (e) => {
    e.preventDefault();
    // 내용이 비어있을 경우 경고 표시
    if (text === '') {
      alert('내용을 입력해주세요!');
      return;
    }
    onUpdateComment({ id, text });
    setText('');
    setEdit(!edit);
  };

  return (
    <>
      <div>
        {/* 댓글 정보 */}
        <span>
          Date: {comment.postDate} username: {user.username}
        </span>
        <hr />
        {/* 댓글 수정 부 form 으로 구현  */}
        {edit && (
          <form onSubmit={onSumbit}>
            <Input value={text} onChange={onChange}></Input>
            <PostActionButtonBlock>
              <ActionButton type={'submit'}>등록</ActionButton>
              <ActionButton>취소</ActionButton>
            </PostActionButtonBlock>
          </form>
        )}
        {edit || (
          <div>
            {comment.text}
            <PostActionButtonBlock>
              <ActionButton
                onClick={() => {
                  setEdit(!edit);
                  setText(comment.text);
                }}
              >
                수정
              </ActionButton>
              <ActionButton onClick={() => onRemove(comment.id)}>
                삭제
              </ActionButton>
            </PostActionButtonBlock>
          </div>
        )}

        <PostCommentToggle onRecomment={onRecomment} comment={comment} />
        <br />
      </div>
    </>
  );
};

export default PostCommentItem;
