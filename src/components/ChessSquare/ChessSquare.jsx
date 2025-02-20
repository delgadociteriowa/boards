import './ChessSquare.css';

const ChessSquare = ({
  id,
  squareType,
  piece,
  pieceSelected,
  selectedPiecePhase,
  selectionPhase,
  selectedSquarePhase,
}) => {
  const pieceChars = { T: '♜', H: '♞', B: '♝', Q: '♛', K: '♚', P: '♟' };
  return (
    <div
      id={id}
      className={`chess__square ${squareType} ${
        pieceSelected && 'selected__square__piece'
      } ${
        !pieceSelected && !selectionPhase && !piece && 'highlighted__square'
      }`}
      onClick={!selectionPhase && !piece ? selectedSquarePhase : null}
    >
      <span
        id={piece}
        className={`chess__piece ${
          piece && piece[0] === 'W' ? 'white' : 'black'
        }__piece ${piece && selectionPhase && 'selectable__piece'} ${
          pieceSelected && 'selected__piece'
        } ${!selectionPhase && !pieceSelected && 'no__pointer'}`}
        onClick={selectionPhase || pieceSelected ? selectedPiecePhase : null}
      >
        {pieceChars[piece[1]]}
      </span>
    </div>
  );
};

export default ChessSquare;
