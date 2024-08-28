import { useEffect, useState } from 'react'

import { Button } from "./components/Button/Button";
import { Dice } from "./components/Dice/Dice";
import { GameBoard } from "./components/GameBoard/GameBoard";
import "./App.scss";
import { GameRules } from './components/GameRules/GameRules';

function App() {
  const [playerDiceSide, setPlayerDiceSide] = useState(0);
  const [dealerDiceSide, setDealerDiceSide] = useState(0);

  const [playerScore, setPlayerScore] = useState(0);
  const [dealerScore, setDealerScore] = useState(0);

  const [dealersTurn, setDealersTurn] = useState(true);

  const handleDiceThrow = () => {
    const randNum = Math.floor(Math.random() * 6) + 1;
    setPlayerDiceSide(randNum);
    setDealersTurn(true);
  }

  const handleDealerDiceThrow = () => {
    const randNum = Math.floor(Math.random() * 6);
    setDealerDiceSide(randNum);
    setDealersTurn(false);
    setDealerScore((prevScore) => prevScore + randNum);
  }

  useEffect(() => {
    handleDealerDiceThrow();
    
  }, [dealersTurn])

  return (
    <>
      <GameBoard>
        <h1><span className='element-container'>5</span>eaking <span className='element-container'>B</span>lackjack</h1>
        <GameRules />
        <section>
          <div className="dice-container dealer-styling">
            <span className='dealer-container'>
              <img src='./src/assets/Heisenberg.jpg' alt='Heisenberg'/>
              <h3>dealers dice</h3>
            </span>
            <Dice diceSide={dealerDiceSide} type='dealerDice'/>
          </div>
          <div className="dice-container">
            <h3>players dice</h3>
            <Dice diceSide={playerDiceSide}/>
            <Button action={handleDiceThrow}/>
          </div>
          <p>Dealer: {dealerScore}</p>
        </section>
      </GameBoard>
    </>
  );
}

export default App;
