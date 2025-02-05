import githubIcon from '../assets/github-icon.svg';
import behanceIcon from '../assets/behance-icon.svg';

const Footer = () => (
  <footer className='footer'>
    <div className='footer__container'>
      <a href='/' className='footer__logo'>
        ♞
      </a>
      <a href='/' className='footer__link'>
        games
      </a>
      <a href='/' className='footer__link'>
        about
      </a>
      <a href='/' className='footer__link'>
        delgadociterio
      </a>
      <div className='social'>
        <a href='/' className='social__logo social__github'>
          <img
            className='social__img'
            src={githubIcon}
            alt='github icon boxicons.com'
          />
        </a>
        <a href='/' className='social__logo'>
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
