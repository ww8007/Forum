import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';

const SubInfoBlock = styled.div`
  ${(props) =>
    props.hasMarginTop &&
    css`
      margin-top: 1rem;
    `}
  color: black;

  /* span 사이에 가운뎃점 문자 보여주기*/
  span + span:before {
    color: ${palette.gray[6]};
    padding-left: 0.25rem;
    padding-right: 0.25rem;
  }
  div {
    display: block;
  }
  span {
    display: flex;
  }
`;

const SubInfo = ({ username, publishedDate, hasMarginTop }) => {
  return (
    <SubInfoBlock hasMarginTop={hasMarginTop}>
      <div>
        <span>
          <b>
            <Link to={`/@${username}`}>작성자 : {username}</Link>
          </b>
        </span>
        <span>작성일 : {new Date(publishedDate).toLocaleDateString()}</span>
      </div>
      <div>댓글개수 : 1</div>
    </SubInfoBlock>
  );
};

export default SubInfo;
