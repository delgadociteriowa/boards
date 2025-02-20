import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => (
  <nav className='nav'>
    <div className='nav__container'>
      <h2 className='nav__title brand__title'>
        <Link className='brand__title__link' to='/'>
          ♞BOARDS
        </Link>
      </h2>
      <Link to='/games' className='nav__link'>
        games
      </Link>
      <Link to='/about' className='nav__link'>
        about
      </Link>
    </div>
  </nav>
);

export default Navigation;
