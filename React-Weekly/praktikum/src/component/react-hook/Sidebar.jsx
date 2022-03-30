import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';


export default props => {
    return (
      <Menu>
        <Link to="/" className="menu-item">
          Home
        </Link>
  
        <Link to="/about" className="menu-item">
          About
        </Link>
      </Menu>
    );
  };


