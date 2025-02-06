import React from 'react';
import { Link } from 'react-router-dom';

import chessIcon from '../assets/chess-icon.svg';
import saveIcon from '../assets/save-icon.svg';
import devicesIcon from '../assets/devices-icon.svg';

import GamesSelection from '../components/GamesSelection';
import FeatureCard from '../components/FeatureCard';

function Home() {
  return (
    <>
      {/* HERO */}
      <header className='hero mobile__box'>
        <div className='hero__container'>
          <div className='hero__picture mobile__box__picture'></div>
          <div className='hero__texts mobile__box__texts'>
            <h2 className='hero__title mobile__box__title brand__title'>
              ♞BOARDS
            </h2>
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

      {/* FEATURES */}
      <section className='features'>
        <div className='features__container'>
          <h2 className='features__title'>BOARDS makes it easy for you</h2>
          <div className='features__cards'>
            <FeatureCard
              icon={chessIcon}
              alt={'chessboard icon - boxicons.com'}
              title={'Your Choises'}
              paragraph={'Place the pieces wherever you want to'}
            />
            <FeatureCard
              icon={saveIcon}
              alt={'save floppy disk icon - boxicons.com'}
              title={'Save Game'}
              paragraph={'Save your game and continue later'}
            />
            <FeatureCard
              icon={devicesIcon}
              alt={'devices icon - boxicons.com'}
              title={'Play Anywhere'}
              paragraph={'Play on mobile desktop'}
            />
          </div>
        </div>
      </section>

      {/* CHESS */}
      <section className='chess mobile__box'>
        <div className='chess__container'>
          <div className='chess__picture mobile__box__picture'></div>
          <div className='chess__texts mobile__box__texts'>
            <h2 className='chess__title mobile__box__title'>CHESS</h2>
            <h3 className='chess__subtitle mobile__box__subtitle'>
              Build an strategy
              <br /> and conquer the board.
            </h3>
            <p className='chess__paragraph mobile__box__paragraph'>
              One of the oldest strategy games.
              <br />
              Play with your friends and
              <br /> make them your foes!
            </p>
            <Link to='/chess' className='chess__cta mobile__box__cta'>
              NEW GAME
            </Link>
          </div>
        </div>
      </section>

      {/* GAMES */}
      <GamesSelection />
    </>
  );
}

export default Home;
