export const GameOver = ({ action, dealerWon, playerWon }) => {
  return (
    <>
      <div>
        <h3>Game Over!</h3>
        <button
          onClick={() => {
            action();
          }}
        >
          Play Again
        </button>
        {dealerWon ? <h3>Dealer Won!</h3> : null}
        {playerWon ? <h3>Player Won!</h3> : null}
      </div>
    </>
  );
};
