import './About.css';

const About = () => {
  return (
    <section className='about about__page'>
      <div className='about__container'>
        <h2 className='about__title'>About</h2>
        <p className='about__text'>
          BOARDS is the place for board game fans all around the world.
          <br />
          <br />
          Here,you can find board games that work just like real-life ones, with
          no restrictions, registrations, or payments required — just fun with
          friends. BOARDS lets you place the pieces wherever you want on the
          board, even if it's not allowed by the rules. You are free to play
          however you want. BOARDS is not a video game but a digital version of
          the games you can find at home.
          <br />
          <br />
          It doesn't matter if you are in the park, a library, or traveling —
          with just a few clicks, you can set up a new game.
        </p>
      </div>
    </section>
  );
};

export default About;
