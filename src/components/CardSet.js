import Card from "./Card";

const alienList = [
  "AlienX",
  "Atomix",
  "BigChill",
  "DiamondHead",
  "EchoEcho",
  "Feedback",
  "FourArms",
  "Goop",
  "Gravattack",
  "GrayMatter",
  "Heatblast",
  "Humangousaur",
  "Rath",
  "Swampfire",
  "Waybig",
  "XLR8",
];

const CardSet = () => {
  const cards = [];
  alienList.forEach((alien) => cards.push(<Card alien={alien} />));
  return <div className="card-list">{cards}</div>;
};

export default CardSet;
