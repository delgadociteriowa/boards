import './ChessSquare.css';

const ChessSquare = ({
  id,
  squareType,
  pieceName,
  pieceChar,
  pieceColor,
  pieceSelected,
  squareSelected,
  selectedPiecePhase,
  selectionPhase,
  selectedSquarePhase,
}) => {
  return (
    <div
      id={id}
      className={`chess__square ${squareType} ${
        pieceSelected && 'selected__square__piece'
      } ${!pieceSelected && !selectionPhase && 'highlighted__square'}`}
      onClick={!selectionPhase ? selectedSquarePhase : null}
    >
      <span
        id={`${pieceName}-${pieceChar}-${pieceColor}`}
        className={`chess__piece ${pieceColor}__piece ${
          pieceChar && selectionPhase && 'selectable__piece'
        } ${pieceSelected && 'selected__piece'} ${
          !selectionPhase && 'no__pointer'
        }`}
        onClick={selectionPhase || pieceSelected ? selectedPiecePhase : null}
      >
        {pieceChar}
      </span>
    </div>
  );
};

export default ChessSquare;
