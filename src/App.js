import "./styles.css";
import Header from "./components/Header";
import CardSet from "./components/CardSet";
import ScoreBoard from "./components/ScoreBoard";
import { useState } from "react";
import Overlay from "./components/Overlay";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [showOverlay, setShowOverlay] = useState(true);

  const removeOverlay = () => setShowOverlay(false);
  const addOverlay = () => setShowOverlay(true);
  const increaseScore = () => setScore(score + 1);
  const resetScore = () => {
    if (highScore < score) setHighScore(score);
    setScore(0);
    addOverlay();
  };

  return (
    <div className="App">
      <Header />

      {showOverlay ? (
        <Overlay score={highScore} removeOverlay={removeOverlay} />
      ) : (
        <>
          <CardSet increaseScore={increaseScore} resetScore={resetScore} />
          <ScoreBoard score={score} highScore={highScore} />
        </>
      )}
    </div>
  );
}

export default App;
