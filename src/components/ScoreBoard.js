const ScoreBoard = (props) => {
  return (
    <div className="scoreboard">
      <div>Score: {props.score}</div>
      <div>High Score: {props.highScore}</div>
    </div>
  );
};

export default ScoreBoard;
