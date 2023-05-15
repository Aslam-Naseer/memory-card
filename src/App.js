import "./styles.css";
import Header from "./components/Header";
import CardSet from "./components/CardSet";
import ScoreBoard from "./components/ScoreBoard";
import { useState } from "react";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const increaseScore = () => setScore(score + 1);
  const resetScore = () => {
    if (highScore < score) setHighScore(score);
    setScore(0);
  };

  return (
    <div className="App">
      <Header />
      <CardSet increaseScore={increaseScore} resetScore={resetScore} />
      <ScoreBoard score={score} highScore={highScore} />
    </div>
  );
}

export default App;
