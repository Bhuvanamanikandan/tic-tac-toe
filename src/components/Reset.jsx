import GameState from "./GameState";

function Reset({ gameState, onReset }) {
  if (gameState === GameState.inProgress) {
    return null;
  }
  return (
    <div className="reset-container">
      <button onClick={onReset} className="reset-button">
        Play Again
      </button>
    </div>
    
  );
}

export default Reset;
