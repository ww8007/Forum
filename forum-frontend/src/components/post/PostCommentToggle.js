import React, { useState } from 'react';
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from 'react-icons/ai';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
const ToggleButton = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;

  font-weight: bold;
  font-size: 1.5rem;
  cursor: pointer;
  span {
    font-size: 1rem;
    width: 20%;
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

const PostCommentToggle = ({ comment, onToggle, onInsert }) => {
  const [set, onSet] = useState(false);
  const [text, setText] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    onInsert(text);
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
          <span onClick={onClick}>답글 달기</span>
        )}
      </ToggleButton>
      <br />
      <div>
        {!set ? null : (
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
        )}
      </div>
    </>
  );
};
export default PostCommentToggle;
