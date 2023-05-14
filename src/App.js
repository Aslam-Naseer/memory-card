import "./styles.css";
import Header from "./components/Header";
import CardSet from "./components/CardSet";
import ScoreBoard from "./components/ScoreBoard";
import { useState } from "react";

function App() {
  const [score, setScore] = useState(0);

  const increaseScore = () => setScore(score + 1);
  const resetScore = () => setScore(0);

  return (
    <div className="App">
      <Header />
      <CardSet increaseScore={increaseScore} resetScore={resetScore} />
      <ScoreBoard score={score} />
    </div>
  );
}

export default App;
