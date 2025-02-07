import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => (
  <header className='hero mobile__box'>
    <div className='hero__container'>
      <div className='hero__picture mobile__box__picture'></div>
      <div className='hero__texts mobile__box__texts'>
        <h2 className='hero__title mobile__box__title brand__title'>♞BOARDS</h2>
        <h3 className='hero__subtitle mobile__box__subtitle'>
          Play classic board games
          <br /> with your friends now!
        </h3>
        <p className='hero__paragraph mobile__box__paragraph'>
          No registration or payments needed,
          <br /> no hard steps either. Just fun
          <br /> with your friends and family
        </p>
        <Link to='/games' className='hero__cta mobile__box__cta'>
          PLAY NOW
        </Link>
      </div>
    </div>
  </header>
);

export default HeroSection;
