import { useEffect, useState } from "react";

import { Button } from "./components/Button/Button";
import { Dice } from "./components/Dice/Dice";
import { GameBoard } from "./components/GameBoard/GameBoard";
import "./App.scss";
import { GameRules } from "./components/GameRules/GameRules";
import PlayerCard from "./components/Scror board/PlayerCard";
import PlayerVsDealer from "./components/Scror board/PlayerVsDealer";

function App() {
  const [playerDiceSide, setPlayerDiceSide] = useState();
  const [dealerDiceSide, setDealerDiceSide] = useState();

  const [dealersTurn, setDealersTurn] = useState(true);

  const handleDiceThrow = () => {
    const randNum = Math.floor(Math.random() * 6) + 1;
    setPlayerDiceSide(randNum);
    setDealersTurn(true);
  };

  const handleDealerDiceThrow = () => {
    const randNum = Math.floor(Math.random() * 6) + 1;
    setDealerDiceSide(randNum);
    setDealersTurn(false);
  };

  useEffect(() => {
    handleDealerDiceThrow();
  }, [dealersTurn]);

  return (
    <>
      <GameBoard>
        <h1>
          <span className="element-container">5</span>eaking{" "}
          <span className="element-container">B</span>lackjack
        </h1>
        <GameRules />
        <section>
          <div className="dice-container dealer-styling">
            <span className="dealer-container">
              <img src="./src/assets/Heisenberg.jpg" alt="Heisenberg" />
              <h3>dealers dice</h3>
            </span>
            <Dice diceSide={dealerDiceSide} type="dealerDice" />
          </div>
          <div className="dice-container">
            <h3>players dice</h3>
            <Dice diceSide={playerDiceSide} />
            <Button action={handleDiceThrow} />
          </div>
        </section>
      </GameBoard>
      <PlayerCard />
      <PlayerVsDealer />
    </>
  );
}

export default App;
