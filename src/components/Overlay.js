import backdrop from "../images/backdrop.png";

const Overlay = (props) => {
  const handleChange = (e) => {
    const n = e.target.value;
    e.target.previousElementSibling.value = n;
    e.target.value = n;
    props.changeMax(n);
  };

  return (
    <div>
      <img src={backdrop} alt="" className="overlay-img" />
      <div className="overlay">
        {props.score === props.max ? (
          <div>Congratulations! You won!!</div>
        ) : null}
        <div>Score: {props.score}</div>
        <button onClick={props.removeOverlay}>
          Play {props.score > 0 ? "Again" : ""}
        </button>
        <div className="diff">
          <span>Difficulty: </span>
          <output>{props.max}</output>
          <input
            type="range"
            min={4}
            max={56}
            value={props.max}
            placeholder="Max Cards"
            id="difficulty"
            onInput={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Overlay;
