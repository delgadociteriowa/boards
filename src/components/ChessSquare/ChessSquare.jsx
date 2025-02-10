import './ChessSquare.css';

const ChessSquare = ({ squareType, piece, pieceColor }) => {
  return (
    <div className={`chess__square ${squareType}`}>
      <span className={`chess__piece ${pieceColor}__piece`}>{piece}</span>
    </div>
  );
};

export default ChessSquare;
