import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/about/about-app">
        About App
      </a>

      <a className="menu-item" href="/about/about-author">
        About Author
      </a>
    </Menu>
  );
};