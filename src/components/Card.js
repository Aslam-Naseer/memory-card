import alienImages from "../images/imageList";

const Card = (props) => {
  console.log(props.alien);
  return (
    <div className="card">
      <img src={alienImages[props.alien]} alt={props.alien} />
      <p>{props.alien}</p>
    </div>
  );
};

export default Card;
