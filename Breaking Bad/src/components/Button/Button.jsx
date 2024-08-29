import style from "./Button.module.scss";

export const Button = ({ action, gameOver }) => {
  return (
    <>
      <button
        disabled={gameOver}
        onClick={() => action()}
        className={`${style.buttonStyling} ${gameOver ? style.gameOver : null}`}
      >
        Roll
      </button>
    </>
  );
};
