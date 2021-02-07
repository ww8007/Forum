import React, { useState } from 'react';

import styled from 'styled-components';
import SideArea from '../common/SideArea';
import palette from '../../lib/styles/palette';
import { AiOutlineUnorderedList } from 'react-icons/ai';
const Title = styled.button`
  height: 100%;
  width: 3rem;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  padding-top: 90px;
  overflow-x: hidden;
  transition: 0.5s ease-in-out;
  a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #fff;
    display: block;
    transition: 0.2s ease-in-out;
  }
`;

const UserTagVerticalList = () => {
  const [check, setCheck] = useState(false);
  const onChange = () => {
    setCheck(!check);
  };
  return (
    <Title onClick={onChange}>
      <AiOutlineUnorderedList />
      <div>
        {check ? (
          <>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
            <a href="#">Portfolio</a>
          </>
        ) : (
          'ㅌ'
        )}
      </div>
    </Title>
  );
};

export default UserTagVerticalList;
