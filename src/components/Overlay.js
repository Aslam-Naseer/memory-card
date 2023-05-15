import backdrop from "../images/backdrop.png";

const Overlay = (props) => {
  return (
    <>
      <img src={backdrop} alt="" className="overlay-img" />
      <div className="overlay">
        <div>Score: {props.score}</div>
        <button onClick={props.removeOverlay}>
          Play {props.score > 0 ? "Again" : ""}
        </button>
      </div>
    </>
  );
};

export default Overlay;
