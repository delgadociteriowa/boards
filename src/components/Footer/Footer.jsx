import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';
import githubIcon from '../../assets/github-icon.svg';
import behanceIcon from '../../assets/behance-icon.svg';

const Footer = () => (
  <footer className='footer'>
    <div className='footer__container'>
      <Link to='/' className='footer__logo'>
        ♞
      </Link>
      <Link to='/games' className='footer__link'>
        games
      </Link>
      <Link to='/about' className='footer__link'>
        about
      </Link>
      <a
        href='https://delgadociteriowa.github.io/main/'
        target='_blank'
        rel='noreferrer'
        className='footer__link'
      >
        delgadociterio
      </a>
      <div className='social'>
        <a
          href='https://github.com/delgadociteriowa/boards'
          target='_blank'
          rel='noreferrer'
          className='social__logo social__github'
        >
          <img
            className='social__img'
            src={githubIcon}
            alt='github icon boxicons.com'
          />
        </a>
        <a
          href='https://www.behance.net/delgadociterio'
          target='_blank'
          rel='noreferrer'
          className='social__logo'
        >
          <img
            className='social__img'
            src={behanceIcon}
            alt='behance icon boxicons.com'
          />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
