export const GameOver = ({ action }) => {
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
      </div>
    </>
  );
};
