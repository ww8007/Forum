import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../components/common/Header';
import { toggleMenu } from '../../modules/posts';
import { logout } from '../../modules/user';

const HeaderContainer = () => {
  const { user, toggle } = useSelector(({ user, posts }) => ({
    user: user.user,
    toggle: posts.toggle,
  }));
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };
  const onClick = () => {
    dispatch(toggleMenu(toggle));
  };
  return <Header user={user} onLogout={onLogout} onClick={onClick} />;
};

export default HeaderContainer;
