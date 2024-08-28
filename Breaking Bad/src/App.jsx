import "./App.scss";
import { GameBoard } from "./components/GameBoard/GameBoard";

function App() {
  return (
    <>
      <GameBoard>
        <h1>Breaking Blackjack</h1>
        <section>
          <h3>dealers dice</h3>
          <h3>players dice</h3>
        </section>
      </GameBoard>
    </>
  );
}

export default App;
