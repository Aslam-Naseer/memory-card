import "./styles.css";
import Header from "./components/Header";
import CardSet from "./components/CardSet";
import ScoreBoard from "./components/ScoreBoard";
import { useEffect, useState } from "react";
import Overlay from "./components/Overlay";
import { alienList } from "./utils/imageList";

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

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
      console.log(max);
    }
  }, [showOverlay, max]);

  useEffect(() => {
    if (score === max) setShowOverlay(true);
  }, [score, max]);

  return (
    <div className="App">
      <Header />

      {showOverlay ? (
        <Overlay
          score={score}
          removeOverlay={removeOverlay}
          max={max}
          changeMax={changeMax}
        />
      ) : (
        <>
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
