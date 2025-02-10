import React, { useState, useEffect } from 'react';
import ChessSquare from '../ChessSquare/ChessSquare';
import './BoardChess.css';

const BoardChess = () => {
  //implementar array bidimencional y ver explicación
  const [chessGrid, setChessGrid] = useState(() => {
    const grid = [];
    for (let i = 1; i <= 12; i++) {
      for (let j = 1; j <= 8; j++) {
        grid.push({
          id: `${i}-${j}`,
          piece: '',
          pieceColor: 'empty',
        });
      }
    }
    return grid;
  });

  const setNewGame = () => {
    setChessGrid((prevChessGrid) => {
      const newChessGrid = [...prevChessGrid];
      const pieces = '♜♞♝♛♚♝♞♜';
      let pieceIndex = 0;

      // set black pieces
      // implement switch with ranges
      for (let i = 16; i <= 23; i++) {
        newChessGrid[i] = {
          ...newChessGrid[i],
          piece: pieces[pieceIndex],
          pieceColor: 'black',
        };
        pieceIndex++;
      }
      for (let i = 24; i <= 31; i++) {
        newChessGrid[i] = {
          ...newChessGrid[i],
          piece: '♟',
          pieceColor: 'black',
        };
      }
      pieceIndex = 0;
      // set white pieces
      for (let i = 64; i <= 71; i++) {
        newChessGrid[i] = {
          ...newChessGrid[i],
          piece: '♟',
          pieceColor: 'white',
        };
      }
      for (let i = 72; i <= 79; i++) {
        newChessGrid[i] = {
          ...newChessGrid[i],
          piece: pieces[pieceIndex],
          pieceColor: 'white',
        };
        pieceIndex++;
      }

      return newChessGrid;
    });
  };

  useEffect(() => {
    setNewGame();
  }, []);

  return (
    <section className='board__chess'>
      <div className='board__chess__container'>
        <div className='board__chess__grid'>
          {chessGrid.map((place, i) => {
            if (i < 16) {
              return (
                <ChessSquare
                  key={place.id}
                  squareType={'discard__square'}
                  piece={place.piece}
                  pieceColor={place.pieceColor}
                />
              );
            } else if (i > 79) {
              return (
                <ChessSquare
                  key={place.id}
                  squareType={'discard__square'}
                  piece={place.piece}
                  pieceColor={place.pieceColor}
                />
              );
            } else {
              if (place.id.split('-')[0] % 2) {
                if (place.id.split('-')[1] % 2) {
                  return (
                    <ChessSquare
                      key={place.id}
                      squareType={'white__square'}
                      piece={place.piece}
                      pieceColor={place.pieceColor}
                    />
                  );
                } else {
                  return (
                    <ChessSquare
                      key={place.id}
                      squareType={'black__square'}
                      piece={place.piece}
                      pieceColor={place.pieceColor}
                    />
                  );
                }
              } else {
                if (place.id.split('-')[1] % 2) {
                  return (
                    <ChessSquare
                      key={place.id}
                      squareType={'black__square'}
                      piece={place.piece}
                      pieceColor={place.pieceColor}
                    />
                  );
                } else {
                  return (
                    <ChessSquare
                      key={place.id}
                      squareType={'white__square'}
                      piece={place.piece}
                      pieceColor={place.pieceColor}
                    />
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
  );
};

export default BoardChess;
