import { useEffect, useState } from "react";

import { Button } from "./components/Button/Button";
import { Dice } from "./components/Dice/Dice";
import { GameBoard } from "./components/GameBoard/GameBoard";
import { GameRules } from "./components/GameRules/GameRules";
import { GameOver } from "./components/GameOver/GameOver";
import PlayerCard from "./components/Scror board/PlayerCard";
import PlayerVsDealer from "./components/Scror board/PlayerVsDealer";
import "./App.scss";

function App() {
  const [playerDiceSide, setPlayerDiceSide] = useState(0);
  const [dealerDiceSide, setDealerDiceSide] = useState(0);

  const [playerScore, setPlayerScore] = useState(0);
  const [dealerScore, setDealerScore] = useState(0);

  const [playerWon, setPlayerWon] = useState(false);
  const [dealerWon, setDealerWon] = useState(false);

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
    setPlayerScore(0);
    setDealerWon(false);
    setPlayerWon(false);
    setGameOver(false);
    setDealersTurn(true);
  };

  useEffect(() => {
    if (dealersTurn) {
      handleDealerDiceThrow();
    }
  }, [dealersTurn]);

  useEffect(() => {
    if (dealerScore === 21 && playerScore !== 21) {
      console.log("Dealer Wins!");
      setDealerWon(true);
      setGameOver(true);
    }

    if (dealerScore > 21) {
      console.log("Dealer bust!");
      setPlayerWon(true);
      setGameOver(true);
    }
  }, [dealerScore]);

  useEffect(() => {
    if (playerScore === 21 && dealerScore !== 21) {
      console.log("Player Wins!");
      setPlayerWon(true);
      setGameOver(true);
    }

    if (playerScore > 21) {
      console.log("Player bust");
      setDealerWon(true);
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
        </section>
        {gameOver ? (
          <GameOver
            action={handleResetGame}
            dealerWon={dealerWon}
            playerWon={playerWon}
          />
        ) : null}
      </GameBoard>
      <PlayerCard />
      <PlayerVsDealer userScore={playerScore} dealerScore={dealerScore} />
    </>
  );
}

export default App;
