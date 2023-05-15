import "./styles.css";
import Header from "./components/Header";
import CardSet from "./components/CardSet";
import ScoreBoard from "./components/ScoreBoard";
import { useEffect, useState } from "react";
import Overlay from "./components/Overlay";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [showOverlay, setShowOverlay] = useState(true);
  const max = 16;

  const removeOverlay = () => setShowOverlay(false);
  const addOverlay = () => setShowOverlay(true);
  const increaseScore = () => setScore(score + 1);
  const resetScore = () => {
    if (highScore < score) setHighScore(score);
    addOverlay();
  };

  useEffect(() => {
    if (!showOverlay) {
      setScore(0);
    }
  }, [showOverlay]);

  useEffect(() => {
    if (score === max) setShowOverlay(true);
  }, [score]);

  return (
    <div className="App">
      <Header />

      {showOverlay ? (
        <Overlay score={score} removeOverlay={removeOverlay} max={max} />
      ) : (
        <>
          <ScoreBoard score={score} highScore={highScore} />
          <CardSet increaseScore={increaseScore} resetScore={resetScore} />
        </>
      )}
    </div>
  );
}

export default App;
