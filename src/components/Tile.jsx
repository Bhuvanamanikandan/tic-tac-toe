function Tile({ className, value, onClick, playerTurn }) {
  let hoverClass = null;
  if (value == null && playerTurn != null) {
    hoverClass = `${playerTurn.toLowerCase()}-hover`;
  }

  const tileClass = value ? `tile ${value}` : `tile ${hoverClass}`;


  return (
    <div onClick={onClick} className={`${tileClass} ${className}`}>
      {value}
    </div>
  );
}

export default Tile;
