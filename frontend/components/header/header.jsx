import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ currentUser, logout, openModal }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <button id='signup-nav' onClick={() => openModal('signup')}>Join</button>
      <button id='login-nav'onClick={() => openModal('login')}>Login</button>

    </nav>
  );
  const hearder = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return currentUser ? hearder() : sessionLinks();
};

export default Header;
