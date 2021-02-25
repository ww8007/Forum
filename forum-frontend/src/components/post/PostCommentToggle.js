import React, { useState } from 'react';
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from 'react-icons/ai';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import PostRecommentItem from './PostRecommentItem';
const ToggleButton = styled.div`
  display: flex;
  align-items: center;

  font-weight: bold;
  font-size: 1.5rem;
  cursor: pointer;
  box-sizing: border-box;
  position: relative;
  z-index: 2;
  span {
    position: absolute;
    top: 0;
    left: 1.7rem;
    font-size: 1rem;
    text-align: center;
    margin-bottom: 2px;
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

const PostCommentToggle = ({ comment, onRecomment }) => {
  const { recomment_id } = comment;
  const { answer_reply_length } = comment;
  // const { id } = comment.recomments;
  const [set, onSet] = useState(false);
  const [text, setText] = useState('');
  console.log('댓글의 명령 :', comment);
  const onSubmit = (e) => {
    e.preventDefault();
    onRecomment(text);
    setText('');
  };
  const onChange = (e) => {
    setText(e.target.value);
  };
  const onClick = () => {
    onSet(!set);
  };
  return (
    <>
      <ToggleButton>
        {set ? (
          <AiOutlineMinusSquare
            onClick={onClick}
            color="#22b8cf"
          ></AiOutlineMinusSquare>
        ) : (
          <AiOutlinePlusSquare
            onClick={onClick}
            color="#22b8cf"
          ></AiOutlinePlusSquare>
        )}
        {set ? (
          <span onClick={onClick}>숨기기</span>
        ) : (
          <div>
            {answer_reply_length === 0 ? (
              <span onClick={onClick}>답글 달기</span>
            ) : (
              <span onClick={onClick}>{answer_reply_length}개의 댓글</span>
            )}
          </div>
        )}
      </ToggleButton>
      <br />
      {set && (
        <form onSubmit={onSubmit}>
          <Input
            type="text"
            value={text}
            placeholder="답글을 입력하세요"
            onChange={onChange}
          ></Input>
          <Button type={'submit'}>등록</Button>
        </form>
      )}
    </>
  );
};
export default PostCommentToggle;
