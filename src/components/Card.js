import alienImages from "../images/imageList";

const Card = (props) => {
  return (
    <div className="card" data-alien={props.alien} onClick={props.selectCard}>
      <img
        src={alienImages[props.alien]}
        alt={props.alien}
        data-alien={props.alien}
      />
      <p data-alien={props.alien}>{props.alien}</p>
    </div>
  );
};

export default Card;
