import { useEffect, useState } from "react";

import { Button } from "./components/Button/Button";
import { Dice } from "./components/Dice/Dice";
import { GameBoard } from "./components/GameBoard/GameBoard";
import "./App.scss";
import { GameRules } from "./components/GameRules/GameRules";
import { GameOver } from "./components/GameOver/GameOver";

function App() {
  const [playerDiceSide, setPlayerDiceSide] = useState(0);
  const [dealerDiceSide, setDealerDiceSide] = useState(0);

  const [playerScore, setPlayerScore] = useState(0);
  const [dealerScore, setDealerScore] = useState(0);

  const [dealersTurn, setDealersTurn] = useState(false);

  const [gameOver, setGameOver] = useState(false);

  const handleDiceThrow = () => {
    const randNumber = Math.floor(Math.random() * 6) + 1;
    setPlayerDiceSide(randNumber);
    setPlayerScore((prevScore) => prevScore + randNumber);
    setDealersTurn(true);
  };

  const handleDealerDiceThrow = () => {
    const randNumber = Math.floor(Math.random() * 6) + 1;
    setDealerDiceSide(randNumber);
    setDealerScore((prevScore) => prevScore + randNumber);
    setDealersTurn(false);
  };

  const handleResetGame = () => {
    setDealerDiceSide(0);
    setPlayerDiceSide(0);
    setDealerScore(0);
  };

  useEffect(() => {
    if (dealersTurn) {
      handleDealerDiceThrow();
    }
  }, [dealersTurn]);

  useEffect(() => {
    if (dealerScore === 21 && playerScore !== 21) {
      console.log("Dealer Wins!");
      setGameOver(true);
    }

    if (dealerScore > 21) {
      console.log("Dealer bust!");
      setGameOver(true);
    }
  }, [dealerScore]);

  useEffect(() => {
    if (playerScore === 21 && dealerScore !== 21) {
      console.log("Player Wins!");
      setGameOver(true);
    }

    if (playerScore > 21) {
      console.log("Player bust");
      setGameOver(true);
    }
  }, [playerScore]);

  useEffect(() => {
    if (!gameOver) {
      console.log("Game Starting");
    } else {
      console.log("Game Over");
    }
  }, [gameOver]);

  return (
    <>
      <GameBoard>
        <h1>
          <span className="element-container">5</span>eaking{" "}
          <span className="element-container">B</span>lackjack
        </h1>
        <GameRules action={handleDealerDiceThrow} />
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
            <Button gameOver={gameOver} action={handleDiceThrow} />
          </div>
          {/* <p>Temp code for showing player, dealer score</p> */}
          <p>Dealer: {dealerScore}</p>
          <p>Player: {playerScore}</p>
        </section>
        {gameOver ? <GameOver /> : null}
      </GameBoard>
    </>
  );
}

export default App;
