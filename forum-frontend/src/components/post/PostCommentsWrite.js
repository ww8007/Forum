import * as React from 'react';
import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';
import palette from '../../lib/styles/palette';

const PostCommentsWriteBlock = styled.div`
  > .buttons-wrapper {
    display: flex;
    justify-content: flex-end;
  }
`;
const StyledTextarea = styled(TextareaAutosize)`
  resize: none;
  padding: 1rem;
  padding-bottom: 1.5rem;
  outline: none;
  border: 1px solid black;
  margin-bottom: 1.5rem;
  width: 100%;
  border-radius: 4px;
  min-height: 6.125rem;
  font-size: 1rem;

  color: black;
  &::placeholder {
    color: ${palette.gray[5]};
  }
  line-height: 1.75;
`;

const PostCommentsWrite = ({ comment, onChange, actionButtons }) => {
  <PostCommentsWriteBlock>
    <StyledTextarea
      value={comment}
      onChange={onChange}
      placeholder="댓글을 입력하세요."
    ></StyledTextarea>
    {actionButtons}
  </PostCommentsWriteBlock>;
};

export default PostCommentsWrite;
