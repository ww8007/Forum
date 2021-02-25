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

const PostCommentItem = ({ comment, onRemove, user }) => {
  const [text, setText] = useState('');
  const [edit, setEdit] = useState(false);
  const { id } = comment;
  const { pk } = comment;
  const onChange = (e) => {
    setText(e.target.value);
  };
  const onRemoveComment = () => {
    console.log('pk값은', pk);
    onRemove({ pk });
  };
  const onSumbit = (e) => {
    e.preventDefault();
    // 내용이 비어있을 경우 경고 표시
    if (text === '') {
      alert('내용을 입력해주세요!');
      return;
    }

    setText('');
    setEdit(!edit);
  };

  const _id = pk;
  const { username } = comment.fields.author.fields;
  const { writeAt, content } = comment.fields;
  console.log('comment pk', comment.pk);
  const postDate = writeAt.split('T');
  return (
    <>
      <div>
        {/* 댓글 정보 */}
        <span>
          Date: {postDate[0]} username: {username}
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
            {content}
            <PostActionButtonBlock>
              <ActionButton
                onClick={() => {
                  setEdit(!edit);
                }}
              >
                수정
              </ActionButton>
              <ActionButton onClick={onRemoveComment}>삭제</ActionButton>
            </PostActionButtonBlock>
          </div>
        )}

        <PostCommentToggle comment={comment} />
        <br />
      </div>
    </>
  );
};

export default PostCommentItem;
