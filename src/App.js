import "./utils/styles.css";
import "./utils/external-styles.css";

import Header from "./components/Header";
import CardSet from "./components/CardSet";
import ScoreBoard from "./components/ScoreBoard";
import { useEffect, useState } from "react";
import Overlay from "./components/Overlay";
import { alienList } from "./utils/imageList";
import shuffle from "./utils/shuffle";

function App() {
  const [max, setMax] = useState(8);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [showOverlay, setShowOverlay] = useState(true);
  const [currentAlienList, setCurrentAlienList] = useState(
    shuffle(alienList).slice(0, max)
  );

  const changeMax = (n) => setMax(Number(n));
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
      setCurrentAlienList(shuffle(alienList).slice(0, max));
    }
  }, [showOverlay, max]);

  useEffect(() => {
    if (score === max) setShowOverlay(true);
  }, [score, max]);

  return (
    <div className="App">
      {showOverlay ? (
        <Overlay
          score={score}
          removeOverlay={removeOverlay}
          max={max}
          changeMax={changeMax}
        />
      ) : (
        <>
          <Header />
          <ScoreBoard score={score} highScore={highScore} />
          <CardSet
            increaseScore={increaseScore}
            resetScore={resetScore}
            max={max}
            alienList={currentAlienList}
          />
        </>
      )}
    </div>
  );
}

export default App;
