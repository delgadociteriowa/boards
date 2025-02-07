const Chess = () => {
  return (
    <>
      <nav className='nav nav--game'>
        <div className='nav__container nav__container--game'>
          <h2 className='nav__title nav__title--game brand__title'>
            ♔ CHESS ♕
          </h2>
        </div>
      </nav>

      <section className='board__chess'>
        <div className='board__chess__container'>
          <div className='board__chess__grid'>
            <div className='chess__place chess__discard da1 corner-1'></div>
            <div className='chess__place chess__discard da2'></div>
            <div className='chess__place chess__discard da3'></div>
            <div className='chess__place chess__discard da4'></div>
            <div className='chess__place chess__discard da5'></div>
            <div className='chess__place chess__discard da6'></div>
            <div className='chess__place chess__discard da7'></div>
            <div className='chess__place chess__discard da8 corner-2'></div>

            <div className='chess__place chess__discard db1'></div>
            <div className='chess__place chess__discard db2'></div>
            <div className='chess__place chess__discard db3'></div>
            <div className='chess__place chess__discard db4'></div>
            <div className='chess__place chess__discard db5'></div>
            <div className='chess__place chess__discard db6'></div>
            <div className='chess__place chess__discard db7'></div>
            <div className='chess__place chess__discard db8'></div>

            <div className='chess__place chess__square white__square'>
              <span className='chess__piece black__piece'>♜</span>
            </div>
            <div className='chess__place chess__square black__square'>
              <span className='chess__piece black__piece'>♞</span>
            </div>
            <div className='chess__place chess__square white__square'>
              <span className='chess__piece black__piece'>♝</span>
            </div>
            <div className='chess__place chess__square black__square'>
              <span className='chess__piece black__piece'>♛</span>
            </div>
            <div className='chess__place chess__square white__square'>
              <span className='chess__piece black__piece'>♚</span>
            </div>
            <div className='chess__place chess__square black__square'>
              <span className='chess__piece black__piece'>♝</span>
            </div>
            <div className='chess__place chess__square white__square'>
              <span className='chess__piece black__piece'>♞</span>
            </div>
            <div className='chess__place chess__square black__square'>
              <span className='chess__piece black__piece'>♜</span>
            </div>

            <div className='chess__place chess__square black__square'>
              <span className='chess__piece black__piece'>♟</span>
            </div>
            <div className='chess__place chess__square white__square'>
              <span className='chess__piece black__piece'>♟</span>
            </div>
            <div className='chess__place chess__square black__square'>
              <span className='chess__piece black__piece'>♟</span>
            </div>
            <div className='chess__place chess__square white__square'>
              <span className='chess__piece black__piece'>♟</span>
            </div>
            <div className='chess__place chess__square black__square'>
              <span className='chess__piece black__piece'>♟</span>
            </div>
            <div className='chess__place chess__square white__square'>
              <span className='chess__piece black__piece'>♟</span>
            </div>
            <div className='chess__place chess__square black__square'>
              <span className='chess__piece black__piece'>♟</span>
            </div>
            <div className='chess__place chess__square white__square'>
              <span className='chess__piece black__piece'>♟</span>
            </div>

            <div className='chess__place chess__square white__square'></div>
            <div className='chess__place chess__square black__square'></div>
            <div className='chess__place chess__square white__square'></div>
            <div className='chess__place chess__square black__square'></div>
            <div className='chess__place chess__square white__square'></div>
            <div className='chess__place chess__square black__square'></div>
            <div className='chess__place chess__square white__square'></div>
            <div className='chess__place chess__square black__square'></div>

            <div className='chess__place chess__square black__square'></div>
            <div className='chess__place chess__square white__square'></div>
            <div className='chess__place chess__square black__square'></div>
            <div className='chess__place chess__square white__square'></div>
            <div className='chess__place chess__square black__square'></div>
            <div className='chess__place chess__square white__square'></div>
            <div className='chess__place chess__square black__square'></div>
            <div className='chess__place chess__square white__square'></div>

            <div className='chess__place chess__square white__square'></div>
            <div className='chess__place chess__square black__square'></div>
            <div className='chess__place chess__square white__square'></div>
            <div className='chess__place chess__square black__square'></div>
            <div className='chess__place chess__square white__square'></div>
            <div className='chess__place chess__square black__square'></div>
            <div className='chess__place chess__square white__square'></div>
            <div className='chess__place chess__square black__square'></div>

            <div className='chess__place chess__square black__square'></div>
            <div className='chess__place chess__square white__square'></div>
            <div className='chess__place chess__square black__square'></div>
            <div className='chess__place chess__square white__square'></div>
            <div className='chess__place chess__square black__square'></div>
            <div className='chess__place chess__square white__square'></div>
            <div className='chess__place chess__square black__square'></div>
            <div className='chess__place chess__square white__square'></div>

            <div className='chess__place chess__square white__square'>
              <span className='chess__piece white__piece'>♟</span>
            </div>
            <div className='chess__place chess__square black__square'>
              <span className='chess__piece white__piece'>♟</span>
            </div>
            <div className='chess__place chess__square white__square'>
              <span className='chess__piece white__piece'>♟</span>
            </div>
            <div className='chess__place chess__square black__square'>
              <span className='chess__piece white__piece'>♟</span>
            </div>
            <div className='chess__place chess__square white__square'>
              <span className='chess__piece white__piece'>♟</span>
            </div>
            <div className='chess__place chess__square black__square'>
              <span className='chess__piece white__piece'>♟</span>
            </div>
            <div className='chess__place chess__square white__square'>
              <span className='chess__piece white__piece'>♟</span>
            </div>
            <div className='chess__place chess__square black__square'>
              <span className='chess__piece white__piece'>♟</span>
            </div>

            <div className='chess__place chess__square black__square'>
              <span className='chess__piece white__piece'>♜</span>
            </div>
            <div className='chess__place chess__square white__square'>
              <span className='chess__piece white__piece'>♞</span>
            </div>
            <div className='chess__place chess__square black__square'>
              <span className='chess__piece white__piece'>♝</span>
            </div>
            <div className='chess__place chess__square white__square'>
              <span className='chess__piece white__piece'>♛</span>
            </div>
            <div className='chess__place chess__square black__square'>
              <span className='chess__piece white__piece'>♚</span>
            </div>
            <div className='chess__place chess__square white__square'>
              <span className='chess__piece white__piece'>♝</span>
            </div>
            <div className='chess__place chess__square black__square'>
              <span className='chess__piece white__piece'>♞</span>
            </div>
            <div className='chess__place chess__square white__square'>
              <span className='chess__piece white__piece'>♜</span>
            </div>

            <div className='chess__place chess__discard dc1'></div>
            <div className='chess__place chess__discard dc2'></div>
            <div className='chess__place chess__discard dc3'></div>
            <div className='chess__place chess__discard dc4'></div>
            <div className='chess__place chess__discard dc5'></div>
            <div className='chess__place chess__discard dc6'></div>
            <div className='chess__place chess__discard dc7'></div>
            <div className='chess__place chess__discard dc8'></div>

            <div className='chess__place chess__discard dd1 corner-3'></div>
            <div className='chess__place chess__discard dd2'></div>
            <div className='chess__place chess__discard dd3'></div>
            <div className='chess__place chess__discard dd4'></div>
            <div className='chess__place chess__discard dd5'></div>
            <div className='chess__place chess__discard dd6'></div>
            <div className='chess__place chess__discard dd7'></div>
            <div className='chess__place chess__discard dd8 corner-4'></div>
          </div>
          <div className='board__chess__options'>
            <button className='option_button'>Restart Game</button>
            <button className='option_button'>Save Game</button>
            <button className='option_button'>Help</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Chess;
