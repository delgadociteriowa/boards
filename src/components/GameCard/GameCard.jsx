import React from 'react';
import { Link } from 'react-router-dom';

const GameCard = ({ title, game, img, ready }) => (
  <div className='game'>
    <div className='game__bck' style={{ backgroundImage: `url(${img})` }}>
      <h3 className='game__title'>{title}</h3>
    </div>
    <div className='game__cta__box'>
      {ready ? (
        <Link to={'/' + game} className='game__cta'>
          NEW GAME
        </Link>
      ) : (
        <h4 className='game__soon'>COMING SOON</h4>
      )}
    </div>
  </div>
);

export default GameCard;
