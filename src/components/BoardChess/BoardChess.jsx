import React, { useState, useEffect } from 'react';
import ChessSquare from '../ChessSquare/ChessSquare';
import './BoardChess.css';

const BoardChess = () => {
  //implement bidimentional array.
  const [chessGrid, setChessGrid] = useState(() => {
    const grid = [];
    for (let i = 1; i <= 12; i++) {
      for (let j = 1; j <= 8; j++) {
        grid.push({
          id: `${i}-${j}`,
          piece: '',
          pieceSelected: false,
        });
      }
    }
    return grid;
  });

  const [selectionPhase, setSelectionPhase] = useState(true);

  const [selectedPiece, setSelectedPiece] = useState('');

  const setNewGame = () => {
    setChessGrid((prevChessGrid) => {
      const newChessGrid = [...prevChessGrid];
      const highPieces = ['T1', 'H1', 'B1', 'Q', 'K', 'B2', 'H2', 'T2'];
      let pieceIndex = 0;

      newChessGrid.forEach((square, i) => {
        switch (true) {
          case i <= 15:
            newChessGrid[i] = {
              ...newChessGrid[i],
              piece: '',
            };
            break;
          case i >= 16 && i <= 23:
            newChessGrid[i] = {
              ...newChessGrid[i],
              piece: `B${highPieces[pieceIndex]}`,
            };
            i === 23 ? (pieceIndex = 0) : pieceIndex++;
            break;
          case i >= 24 && i <= 31:
            newChessGrid[i] = {
              ...newChessGrid[i],
              piece: `BP${pieceIndex + 1}`,
            };
            i === 31 ? (pieceIndex = 0) : pieceIndex++;
            break;
          case i >= 32 && i <= 63:
            newChessGrid[i] = {
              ...newChessGrid[i],
              piece: '',
            };
            break;
          case i >= 64 && i <= 71:
            newChessGrid[i] = {
              ...newChessGrid[i],
              piece: `WP${pieceIndex + 1}`,
            };
            i === 71 ? (pieceIndex = 0) : pieceIndex++;
            break;
          case i >= 72 && i <= 79:
            newChessGrid[i] = {
              ...newChessGrid[i],
              piece: `W${highPieces[pieceIndex]}`,
            };
            i === 79 ? (pieceIndex = 0) : pieceIndex++;
            break;
          case i >= 80:
            newChessGrid[i] = {
              ...newChessGrid[i],
              piece: '',
            };
            break;
          default:
            console.log('error');
        }
      });

      return newChessGrid;
    });
  };

  const selectedPiecePhase = (e) => {
    if (e.target.id === selectedPiece) {
      setChessGrid((prevChessGrid) =>
        prevChessGrid.map((square) =>
          square.piece === e.target.id
            ? { ...square, pieceSelected: false }
            : square
        )
      );
      setSelectionPhase(true);
      setSelectedPiece('');
      return undefined;
    }

    if (!selectionPhase) return undefined;

    setChessGrid((prevChessGrid) =>
      prevChessGrid.map((square) =>
        square.piece === e.target.id
          ? { ...square, pieceSelected: true }
          : square
      )
    );
    setSelectionPhase(false);
    setSelectedPiece(e.target.id);
  };

  const selectedSquarePhase = (e) => {
    setChessGrid((prevChessGrid) =>
      prevChessGrid.map((square) =>
        square.piece === selectedPiece
          ? {
              ...square,
              piece: '',
              pieceSelected: false,
            }
          : square
      )
    );

    setChessGrid((prevChessGrid) =>
      prevChessGrid.map((square) =>
        square.id === e.target.id
          ? {
              ...square,
              piece: selectedPiece,
            }
          : square
      )
    );

    setSelectedPiece('');
    setSelectionPhase(true);
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
                  id={place.id}
                  squareType={'discard__square'}
                  piece={place.piece}
                  pieceSelected={place.pieceSelected}
                  selectedPiecePhase={selectedPiecePhase}
                  selectionPhase={selectionPhase}
                  selectedSquarePhase={selectedSquarePhase}
                />
              );
            } else if (i > 79) {
              return (
                <ChessSquare
                  key={place.id}
                  id={place.id}
                  squareType={'discard__square'}
                  piece={place.piece}
                  pieceSelected={place.pieceSelected}
                  selectedPiecePhase={selectedPiecePhase}
                  selectionPhase={selectionPhase}
                  selectedSquarePhase={selectedSquarePhase}
                />
              );
            } else {
              if (place.id.split('-')[0] % 2) {
                if (place.id.split('-')[1] % 2) {
                  return (
                    <ChessSquare
                      key={place.id}
                      id={place.id}
                      squareType={'white__square'}
                      piece={place.piece}
                      pieceSelected={place.pieceSelected}
                      selectedPiecePhase={selectedPiecePhase}
                      selectionPhase={selectionPhase}
                      selectedSquarePhase={selectedSquarePhase}
                    />
                  );
                } else {
                  return (
                    <ChessSquare
                      key={place.id}
                      id={place.id}
                      squareType={'black__square'}
                      piece={place.piece}
                      pieceSelected={place.pieceSelected}
                      selectedPiecePhase={selectedPiecePhase}
                      selectionPhase={selectionPhase}
                      selectedSquarePhase={selectedSquarePhase}
                    />
                  );
                }
              } else {
                if (place.id.split('-')[1] % 2) {
                  return (
                    <ChessSquare
                      key={place.id}
                      id={place.id}
                      squareType={'black__square'}
                      piece={place.piece}
                      pieceSelected={place.pieceSelected}
                      selectedPiecePhase={selectedPiecePhase}
                      selectionPhase={selectionPhase}
                      selectedSquarePhase={selectedSquarePhase}
                    />
                  );
                } else {
                  return (
                    <ChessSquare
                      key={place.id}
                      id={place.id}
                      squareType={'white__square'}
                      piece={place.piece}
                      pieceSelected={place.pieceSelected}
                      selectedPiecePhase={selectedPiecePhase}
                      selectionPhase={selectionPhase}
                      selectedSquarePhase={selectedSquarePhase}
                    />
                  );
                }
              }
            }
          })}
        </div>
        <div className='board__chess__options'>
          <button className='option__button' onClick={setNewGame}>
            Restart Game
          </button>
        </div>
      </div>
    </section>
  );
};

export default BoardChess;
