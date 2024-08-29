import { useEffect, useState } from "react";
import style from "./GameRules.module.scss";

export const GameRules = ({ action }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleCloseModal = () => {
    setIsOpen(false);
    action();
  };

  return (
    <>
      <div></div>
      {isOpen ? (
        <div className={style.modalStyling}>
          <span>
            <img src="./src/assets/background.jpg" />
            <h2>Blackjack with dices</h2>
          </span>
          <p>Game rules text here</p>
          <button onClick={() => handleCloseModal()}>Start Gme</button>
        </div>
      ) : null}
    </>
  );
};
