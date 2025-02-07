import { Link } from 'react-router-dom';
import './ChessSection.css';

const ChessSection = () => (
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
);

export default ChessSection;
