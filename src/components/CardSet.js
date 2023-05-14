import { useState } from "react";
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

const CardSet = (props) => {
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
