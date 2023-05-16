import { useState } from "react";
import Card from "./Card";
import shuffle from "../utils/shuffle";

const CardSet = (props) => {
  const alienList = props.alienList;
  const [selected, setSelected] = useState([]);

  const isNotSelected = (alien) => {
    console.log(selected);
    console.log();
    return !selected.includes(alien);
  };

  const increaseScore = (alien) => {
    props.increaseScore();
    setSelected([...selected, alien]);
  };

  const resetScore = () => {
    props.resetScore();
    setSelected([]);
  };

  const selectCard = (e) => {
    const alien = e.target.dataset.alien;
    if (isNotSelected(alien)) increaseScore(alien);
    else resetScore();
  };

  const cards = [];
  shuffle(alienList);
  alienList.forEach((alien) =>
    cards.push(
      <Card alien={alien} key={alien + Math.random()} selectCard={selectCard} />
    )
  );
  return (
    <>
      <div className="card-list">{cards}</div>
    </>
  );
};

export default CardSet;
