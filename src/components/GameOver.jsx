import GameState from "./GameState";

function GameOver({ gameState }) {
  switch (gameState) {
    case GameState.inProgress:
      return null;
    case GameState.playerOWins:
      return <div className="game-over">O Wins</div>;
    case GameState.playerXWins:
      return <div className="game-over">X Wins</div>;
    case GameState.draw:
      return <div className="game-over">Draw</div>;
    default:
      return null;
  }
}

export default GameOver;
