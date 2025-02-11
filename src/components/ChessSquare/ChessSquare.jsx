import './ChessSquare.css';

const ChessSquare = ({
  id,
  squareType,
  piece,
  pieceName,
  pieceColor,
  pieceSelected,
  squareSelected,
  selectedPiecePhase,
  selectionPhase,
}) => {
  return (
    <div
      id={id}
      className={`chess__square ${squareType} ${
        pieceSelected && 'selected__square__piece'
      } ${!pieceSelected && !selectionPhase && 'highlighted__square'}`}
    >
      <span
        id={pieceName}
        className={`chess__piece ${pieceColor}__piece ${
          piece && selectionPhase && 'selectable__piece'
        } ${pieceSelected && 'selected__piece'}`}
        onClick={selectionPhase || pieceSelected ? selectedPiecePhase : null}
      >
        {piece}
      </span>
    </div>
  );
};

export default ChessSquare;
