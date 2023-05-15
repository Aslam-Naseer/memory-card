import backdrop from "../images/backdrop.jpg";

const Overlay = (props) => {
  return (
    <div>
      <img src={backdrop} alt="" className="overlay-img" />
      <div className="overlay">
        <div>Score: {props.score}</div>
        <button onClick={props.removeOverlay}>
          Play {props.score > 0 ? "Again" : ""}
        </button>
      </div>
    </div>
  );
};

export default Overlay;
