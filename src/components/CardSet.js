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

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

const CardSet = () => {
  const [selected, setSelected] = useState([]);

  const selectCard = (e) => {
    const alien = e.target.dataset.alien;
    setSelected([...selected, alien]);
    console.log(selected);
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
