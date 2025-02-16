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
      const pieceNamesGroup = [
        ['BT1', 'BH1', 'BB1', 'BQ', 'BK', 'BB2', 'BH2', 'BT2'],
        ['BP1', 'BP2', 'BP3', 'BP4', 'BP5', 'BP6', 'BP7', 'BP8'],
        ['WP1', 'WP2', 'WP3', 'WP4', 'WP5', 'WP6', 'WP7', 'WP8'],
        ['WT1', 'WH1', 'WB1', 'WQ', 'WK', 'WB2', 'WH2', 'WT2'],
      ];
      let pieceIndex = 0;

      // Clean discard 1
      for (let i = 0; i <= 15; i++) {
        newChessGrid[i] = {
          ...newChessGrid[i],
          piece: '',
        };
        pieceIndex++;
      }

      pieceIndex = 0;

      // set black pieces
      for (let i = 16; i <= 23; i++) {
        const pieceNames = pieceNamesGroup[0];
        newChessGrid[i] = {
          ...newChessGrid[i],
          piece: pieceNames[pieceIndex],
        };
        pieceIndex++;
      }

      pieceIndex = 0;

      for (let i = 24; i <= 31; i++) {
        const pieceNames = pieceNamesGroup[1];
        newChessGrid[i] = {
          ...newChessGrid[i],
          piece: pieceNames[pieceIndex],
        };
        pieceIndex++;
      }

      pieceIndex = 0;

      // Clean center
      for (let i = 32; i <= 63; i++) {
        newChessGrid[i] = {
          ...newChessGrid[i],
          piece: '',
        };
        pieceIndex++;
      }

      pieceIndex = 0;

      // set white pieces
      for (let i = 64; i <= 71; i++) {
        const pieceNames = pieceNamesGroup[2];
        newChessGrid[i] = {
          ...newChessGrid[i],
          piece: pieceNames[pieceIndex],
        };
        pieceIndex++;
      }

      pieceIndex = 0;

      for (let i = 72; i <= 79; i++) {
        const pieceNames = pieceNamesGroup[3];
        newChessGrid[i] = {
          ...newChessGrid[i],
          piece: pieceNames[pieceIndex],
        };
        pieceIndex++;
      }

      // Clean center
      for (let i = 80; i <= 95; i++) {
        newChessGrid[i] = {
          ...newChessGrid[i],
          piece: '',
        };
        pieceIndex++;
      }

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
          <button className='option_button' onClick={setNewGame}>
            Restart Game
          </button>
        </div>
      </div>
    </section>
  );
};

export default BoardChess;
