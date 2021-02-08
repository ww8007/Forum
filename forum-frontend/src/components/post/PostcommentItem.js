import React, { useState } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from 'react-icons/ai';
const PostcommentItemBlock = styled.div`
  border: 1px solid black;
`;

const PostcommentCount = styled.div`
  font-size: 2rem;
`;
const TogglerBlock = styled.div`
  display: inline-flex;
  align-items: center;
  color: ${palette.gray[5]};
  font-weight: bold;
  svg {
    margin-right: 0.5rem;
  }
  cursor: pointer;
  &:hover {
    color: ${palette.gray[7]};
  }
`;

const Toggler = ({ open, onToggle, count }) => {
  const openText = count ? `${count}개의 댓글` : '답글달기';
  return (
    <TogglerBlock onClick={onToggle}>
      {open ? <AiOutlinePlusSquare /> : <AiOutlineMinusSquare />}
      <span>{open ? '숨기기' : openText}</span>
    </TogglerBlock>
  );
};

const PostcommentItem = ({ count, comment }) => {
  const [open, SetOpen] = useState(false);
  const onToggle = () => {
    return !open;
  };
  return (
    <PostcommentItemBlock>
      <Toggler open={open} onClick={onToggle} count="1"></Toggler>
    </PostcommentItemBlock>
  );
};

export default PostcommentItem;
