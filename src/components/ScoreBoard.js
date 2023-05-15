const ScoreBoard = (props) => {
  return (
    <div className="scoreboard">
      <div className="current score">Current Score: {props.score}</div>
      <div className="high-score score">High Score: {props.highScore}</div>
    </div>
  );
};

export default ScoreBoard;
