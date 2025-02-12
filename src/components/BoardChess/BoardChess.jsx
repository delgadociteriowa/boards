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
          pieceName: '',
          pieceChar: '',
          pieceColor: 'empty',
          pieceSelected: false,
          squareSelected: false,
        });
      }
    }
    return grid;
  });
  const [selectionPhase, setSelectionPhase] = useState(true);
  const [overSquare, setOverSquare] = useState('');
  const [selectedPiece, setSelectedPiece] = useState({
    pieceName: '',
    pieceChar: '',
    pieceColor: '',
  });

  // const [selectedPiecePhase, setSelectedPiecePhase] = useState(false);

  const setNewGame = () => {
    setChessGrid((prevChessGrid) => {
      const newChessGrid = [...prevChessGrid];
      const pieceNamesGroup = [
        ['BT1', 'BH1', 'BB1', 'BQ', 'BK', 'BB2', 'BH2', 'BT2'],
        ['BP1', 'BP2', 'BP3', 'BP4', 'BP5', 'BP6', 'BP7', 'BP8'],
        ['WP1', 'WP2', 'WP3', 'WP4', 'WP5', 'WP6', 'WP7', 'WP8'],
        ['WT1', 'WH1', 'WB1', 'WQ', 'WK', 'WB2', 'WH2', 'WT2'],
      ];
      const pieces = '♜♞♝♛♚♝♞♜';
      let pieceIndex = 0;

      // set black pieces
      // implement switch with ranges
      for (let i = 16; i <= 23; i++) {
        const pieceNames = pieceNamesGroup[0];
        newChessGrid[i] = {
          ...newChessGrid[i],
          pieceName: pieceNames[pieceIndex],
          pieceChar: pieces[pieceIndex],
          pieceColor: 'black',
        };
        pieceIndex++;
      }

      pieceIndex = 0;

      for (let i = 24; i <= 31; i++) {
        const pieceNames = pieceNamesGroup[1];
        newChessGrid[i] = {
          ...newChessGrid[i],
          pieceName: pieceNames[pieceIndex],
          pieceChar: '♟',
          pieceColor: 'black',
        };
        pieceIndex++;
      }

      pieceIndex = 0;

      // set white pieces
      for (let i = 64; i <= 71; i++) {
        const pieceNames = pieceNamesGroup[2];
        newChessGrid[i] = {
          ...newChessGrid[i],
          pieceName: pieceNames[pieceIndex],
          pieceChar: '♟',
          pieceColor: 'white',
        };
        pieceIndex++;
      }

      pieceIndex = 0;

      for (let i = 72; i <= 79; i++) {
        const pieceNames = pieceNamesGroup[3];
        newChessGrid[i] = {
          ...newChessGrid[i],
          pieceName: pieceNames[pieceIndex],
          pieceChar: pieces[pieceIndex],
          pieceColor: 'white',
        };
        pieceIndex++;
      }
      return newChessGrid;
    });
  };

  const selectedPiecePhase = (e) => {
    if (e.target.id.split('-')[0] === selectedPiece.pieceName) {
      setChessGrid((prevChessGrid) =>
        prevChessGrid.map((square) =>
          square.pieceName === e.target.id.split('-')[0]
            ? { ...square, pieceSelected: false }
            : square
        )
      );
      setSelectionPhase(true);
      setSelectedPiece({
        pieceName: '',
        pieceChar: '',
        pieceColor: '',
      });
      return undefined;
    }

    if (!selectionPhase) return undefined;

    setChessGrid((prevChessGrid) =>
      prevChessGrid.map((square) =>
        square.pieceName === e.target.id.split('-')[0]
          ? { ...square, pieceSelected: true }
          : square
      )
    );
    setSelectionPhase(false);
    setSelectedPiece({
      pieceName: e.target.id.split('-')[0],
      pieceChar: e.target.id.split('-')[1],
      pieceColor: e.target.id.split('-')[2],
    });
  };

  const mouseOverSquare = (e) => setOverSquare(e.target.id);

  const selectedSquarePhase = () => {
    setChessGrid((prevChessGrid) =>
      prevChessGrid.map((square) =>
        square.pieceName === selectedPiece.pieceName
          ? {
              ...square,
              pieceName: '',
              pieceChar: '',
              pieceColor: '',
              pieceSelected: false,
            }
          : square
      )
    );

    setChessGrid((prevChessGrid) =>
      prevChessGrid.map((square) =>
        square.id === overSquare
          ? {
              ...square,
              pieceName: selectedPiece.pieceName,
              pieceChar: selectedPiece.pieceChar,
              pieceColor: selectedPiece.pieceColor,
            }
          : square
      )
    );

    setSelectedPiece({ pieceName: '', pieceChar: '', pieceColor: '' });
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
                  pieceName={place.pieceName}
                  pieceChar={place.pieceChar}
                  pieceColor={place.pieceColor}
                  pieceSelected={place.pieceSelected}
                  squareSelected={place.squareSelected}
                  selectedPiecePhase={selectedPiecePhase}
                  selectionPhase={selectionPhase}
                  mouseOverSquare={mouseOverSquare}
                  selectedSquarePhase={selectedSquarePhase}
                />
              );
            } else if (i > 79) {
              return (
                <ChessSquare
                  key={place.id}
                  id={place.id}
                  squareType={'discard__square'}
                  pieceName={place.pieceName}
                  pieceChar={place.pieceChar}
                  pieceColor={place.pieceColor}
                  pieceSelected={place.pieceSelected}
                  squareSelected={place.squareSelected}
                  selectedPiecePhase={selectedPiecePhase}
                  selectionPhase={selectionPhase}
                  mouseOverSquare={mouseOverSquare}
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
                      pieceName={place.pieceName}
                      pieceChar={place.pieceChar}
                      pieceColor={place.pieceColor}
                      pieceSelected={place.pieceSelected}
                      squareSelected={place.squareSelected}
                      selectedPiecePhase={selectedPiecePhase}
                      selectionPhase={selectionPhase}
                      mouseOverSquare={mouseOverSquare}
                      selectedSquarePhase={selectedSquarePhase}
                    />
                  );
                } else {
                  return (
                    <ChessSquare
                      key={place.id}
                      id={place.id}
                      squareType={'black__square'}
                      pieceName={place.pieceName}
                      pieceChar={place.pieceChar}
                      pieceColor={place.pieceColor}
                      pieceSelected={place.pieceSelected}
                      squareSelected={place.squareSelected}
                      selectedPiecePhase={selectedPiecePhase}
                      selectionPhase={selectionPhase}
                      mouseOverSquare={mouseOverSquare}
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
                      pieceName={place.pieceName}
                      pieceChar={place.pieceChar}
                      pieceColor={place.pieceColor}
                      pieceSelected={place.pieceSelected}
                      squareSelected={place.squareSelected}
                      selectedPiecePhase={selectedPiecePhase}
                      selectionPhase={selectionPhase}
                      mouseOverSquare={mouseOverSquare}
                      selectedSquarePhase={selectedSquarePhase}
                    />
                  );
                } else {
                  return (
                    <ChessSquare
                      key={place.id}
                      id={place.id}
                      squareType={'white__square'}
                      pieceName={place.pieceName}
                      pieceChar={place.pieceChar}
                      pieceColor={place.pieceColor}
                      pieceSelected={place.pieceSelected}
                      squareSelected={place.squareSelected}
                      selectedPiecePhase={selectedPiecePhase}
                      selectionPhase={selectionPhase}
                      mouseOverSquare={mouseOverSquare}
                      selectedSquarePhase={selectedSquarePhase}
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
          <button className='option_button'>{overSquare}</button>
        </div>
      </div>
    </section>
  );
};

export default BoardChess;
