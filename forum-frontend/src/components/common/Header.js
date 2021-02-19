import React from 'react';
import styled from 'styled-components';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import Responsive from './Responsive';

import Button from './Button';

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

/**
 * Responsive 컴포넌트의 속성에 스타일을 추가해서 새로운 컴포넌트 생성
 */

const Wrapper = styled(Responsive)`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between; /* 자식 엘리먼트 사이에 여백을 최대로 설정 */
  .menu {
    position: absolute;
    justify-content: flex-start;
    align-items: center;
    font-size: 1.5rem;
    margin-left: -28rem;

    .box {
      margin-left: -1rem;
      width: 3rem;
      height: 1916px;
      font-size: 10px;
      color: black;
    }
    .box:hover {
      background: ${palette.gray[6]};
      animation: first-ani 1s;
      animation-fill-mode: forwards;
    }

    @keyframes first-ani {
      0% {
        width: 100px;
        height: 1916px;
      }

      100% {
        width: 300px;
        height: 1916px;
      }
    }
  }
  .logo {
    font-size: 1.5rem;
    font-weight: 800;
    letter-spacing: 2px;
  }
  .right {
    display: flex;
    align-items: center;
  }
`;

/**
 * 헤더가 fixed로 되어 있기 때문에 페이지의 컨텐츠가 4rem 아래 나타나도록 해주는 컴포넌트
 */
const Spacer = styled.div`
  height: 4rem;
`;

const UserInfo = styled.div`
  font-weight: 800;
  margin-right: 1rem;
`;

const MenuList = styled(Link)`
  font-weight: 800;
  margin-right: 1rem;
`;

const BoardItem = ({ board }) => {
  const { name } = board.fields;
  const { post_length } = board;
  const number = post_length;

  return (
    <>
      <h2>
        <Link to={`/board/${board.pk}`}>{name}</Link>
      </h2>
      {console.log(board)}
    </>
  );
};
const Header = ({ user, onLogout, onClick, boards, data }) => {
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <AiOutlineMenu
            className="menu"
            color="#22b8cf"
            onClick={onClick}
          ></AiOutlineMenu>
          <div className="menu">
            안녕
            <div className="box">
              {/* {boards && (
                <div>
                  {data.map((board) => (
                    <BoardItem board={board} key={board.pk} />
                  ))}
                </div>
              )} */}
              안녕
            </div>
          </div>
          <Link to="/" className="logo">
            REACTERS
          </Link>
          <MenuList to="/">FORUM</MenuList>
          <MenuList to="/login">BOARD</MenuList>
          <MenuList>Q&A</MenuList>
          {user ? (
            <div className="right">
              <UserInfo>{user.username}</UserInfo>
              <Button cyan onClick={onLogout}>
                로그아웃
              </Button>
            </div>
          ) : (
            <div className="right">
              <Button cyan to="/login">
                로그인
              </Button>
            </div>
          )}
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

export default Header;
