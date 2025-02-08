import React, { useState } from 'react';

import './Chess.css';

{
  /* <div className='chess__place'></div> */
}

const Chess = () => {
  const [chessGrid, setChessGrid] = useState(() => {
    const grid = [];
    for (let i = 1; i <= 12; i++) {
      for (let j = 1; j <= 8; j++) {
        grid.push({ id: `${i}-${j}`, piece: '' });
      }
    }
    console.log(grid);
    return grid;
  });

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
            {chessGrid.map((place, i) => {
              if (i < 16) {
                return (
                  <div key={place.id} class='chess__place chess__discard'></div>
                );
              } else if (i > 79) {
                return (
                  <div key={place.id} class='chess__place chess__discard'></div>
                );
              } else {
                if (place.id.split('-')[0] % 2) {
                  if (place.id.split('-')[1] % 2) {
                    return (
                      <div
                        key={place.id}
                        class='chess__place white__square'
                      ></div>
                    );
                  } else {
                    return (
                      <div
                        key={place.id}
                        class='chess__place black__square'
                      ></div>
                    );
                  }
                } else {
                  if (place.id.split('-')[1] % 2) {
                    return (
                      <div
                        key={place.id}
                        class='chess__place black__square'
                      ></div>
                    );
                  } else {
                    return (
                      <div
                        key={place.id}
                        class='chess__place white__square'
                      ></div>
                    );
                  }
                }
              }
            })}
          </div>
          <div className='board__chess__options'>
            <button className='option_button'>New Game</button>
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
