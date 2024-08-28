import { useEffect, useState } from 'react'

import { Button } from "./components/Button/Button";
import { Dice } from "./components/Dice/Dice";
import { GameBoard } from "./components/GameBoard/GameBoard";
import "./App.scss";

function App() {
  const [playerDiceSide, setPlayerDiceSide] = useState();
  const [dealerDiceSide, setDealerDiceSide] = useState();

  const [dealersTurn, setDealersTurn] = useState(true);

  const handleDiceThrow = () => {
    const randNum = Math.floor(Math.random() * 6) + 1;
    setPlayerDiceSide(randNum);
    setDealersTurn(true);
  }

  const handleDealerDiceThrow = () => {
    const randNum = Math.floor(Math.random() * 6) + 1;
    setDealerDiceSide(randNum);
    setDealersTurn(false);
  }

  useEffect(() => {
    handleDealerDiceThrow();
    
  }, [dealersTurn])

  return (
    <>
      <GameBoard>
        <h1><span className='element-container'>5</span>eaking <span className='element-container'>B</span>lackjack</h1>
        <section>
          <div className="dice-container">
            <h3>dealers dice</h3>
            <Dice diceSide={dealerDiceSide}/>
          </div>
          <div className="dice-container">
            <h3>players dice</h3>
            <Dice diceSide={playerDiceSide}/>
            <Button action={handleDiceThrow}/>
          </div>
        </section>
      </GameBoard>
    </>
  );
}

export default App;
