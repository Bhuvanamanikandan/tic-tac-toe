import Strike from "./Strike";
import Tile from "./Tile";


function Board({ tiles, onTileClick, playerTurn, strikeClass }) {
  return (
    <div className="board">
      {tiles.map((tile, index) => (
        <Tile
          key={index}
          playerTurn={playerTurn}
          onClick={() => onTileClick(index)}
          value={tile}
          className="board-tile"
        />
      ))}
      <Strike strikeClass={strikeClass} />
    </div>
  );
}

export default Board;
