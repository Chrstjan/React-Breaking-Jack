import "./App.scss";
import { Dice } from "./components/Dice/Dice";
import { GameBoard } from "./components/GameBoard/GameBoard";

function App() {
  return (
    <>
      <GameBoard>
        <h1>Breaking Blackjack</h1>
        <section>
          <div className="dice-container">
            <h3>dealers dice</h3>
            <Dice />
          </div>
          <div className="dice-container">
            <h3>players dice</h3>
            <Dice />
            <button>roll dice</button>
          </div>
        </section>
      </GameBoard>
    </>
  );
}

export default App;
