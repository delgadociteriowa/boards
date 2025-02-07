import './GamesSelection.css';
import GameCard from '../GameCard/GameCard';
import GameChessImg from '../../assets/games-chess.png';
import GameCheckersImg from '../../assets/games-chess.png';
import GameGoImg from '../../assets/games-chess.png';

const GamesSelection = ({ isPage }) => {
  return (
    <section className={`games ${isPage ? 'games__page' : ''}`}>
      <div className='games__container'>
        <h2 className='games__title'>Select a game</h2>
        <div className='games__items'>
          <GameCard
            title={'CHESS'}
            game={'chess'}
            img={GameChessImg}
            ready={true}
          />
          <GameCard title={'CHECKERS'} img={GameCheckersImg} ready={false} />
          <GameCard title={'GO'} img={GameGoImg} ready={false} />
        </div>
      </div>
    </section>
  );
};

export default GamesSelection;
