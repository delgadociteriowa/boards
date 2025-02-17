import './FeaturesSection.css';

import chessIcon from '../../assets/chess-icon.svg';
import saveIcon from '../../assets/save-icon.svg';
import devicesIcon from '../../assets/devices-icon.svg';

import FeatureCard from '../FeatureCard/FeatureCard';

const FeaturesSection = () => (
  <section className='features'>
    <div className='features__container'>
      <h2 className='features__title'>BOARDS makes it easy for you</h2>
      <div className='features__cards'>
        <FeatureCard
          icon={chessIcon}
          alt={'chessboard icon - boxicons.com'}
          title={'Your Choices'}
          paragraph={'Place the pieces wherever you want'}
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
          paragraph={'Play on mobile, tablet or desktop'}
        />
      </div>
    </div>
  </section>
);

export default FeaturesSection;
