import React from 'react';
import styled from 'styled-components';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import Responsive from './Responsive';

import Button from './Button';

const HeaderBlock = styled.div`
  position: fixed;

  background: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

/**
 * Responsive 컴포넌트의 속성에 스타일을 추가해서 새로운 컴포넌트 생성
 */
const Menu = styled.div`
  width: 10%;
  margin: 0;
  display: inline-flex;
  margin-top: 2rem;
  align-items: center;
  -webkit-box-align: center;
  .menu {
    justify-content: flex-start;
    align-items: center;
    font-size: 1.5rem;
  }
  .box {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 200px;
    margin-top: -1rem;
    height: 1916px;
    font-size: 20px;
    h1 {
      display: none;
      font-size: 2rem;
      margin-top: 5rem;
    }
    a {
      position: fixed;
      top: 10rem;
      left: 0;
      margin-left: 1rem;
      right: 1rem;
      bottom: 0;
      width: 2rem;
      height: 1rem;
      display: none;
    }
  }
  .box:hover {
    h1 {
      display: inline-block;
    }
    a {
      display: block;
    }
    background: ${palette.gray[6]};
    animation: first-ani 1s;

    animation-fill-mode: forwards;
  }

  @keyframes first-ani {
    0% {
      width: 200px;
    }

    100% {
      width: 200px;
    }
  }
`;

const Wrapper = styled(Responsive)`
  height: 4rem;
  display: inline-flex;
  align-items: center;
  justify-content: space-between; /* 자식 엘리먼트 사이에 여백을 최대로 설정 */

  .logo {
    font-size: 1.5rem;
    font-weight: 800;
    letter-spacing: 2px;
  }
  .right {
    justify-content: flex-end;
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
      <Link to={`/board/${board.pk}`}>{name}</Link>
    </>
  );
};
const Header = ({ user, onLogout, onClick, boards, data }) => {
  return (
    <>
      <HeaderBlock>
        <Menu>
          <AiOutlineMenu
            className="menu"
            color="#22b8cf"
            onClick={onClick}
          ></AiOutlineMenu>
          <ul className="box">
            <h1>게시판</h1>
            {boards && (
              <ul>
                {data.map((board) => (
                  <BoardItem board={board} key={board.pk} />
                ))}
              </ul>
            )}
          </ul>
        </Menu>
        <Wrapper>
          <Link to="/" className="logo">
            REACTERS
          </Link>
          <MenuList to="/">FORUM</MenuList>
          <MenuList to="/login">BOARD</MenuList>
          <MenuList to="/board/1">Q&A</MenuList>
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
