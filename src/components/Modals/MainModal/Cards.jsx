import React, { useState } from "react";
import articles from "../../../assets/articles.json";
import Card from "./Card";

const Cards = ({ increaseBackers, increaseAmount, finished }) => {
  const activeCardArray = Array(articles.length).fill(false);
  const [activeCard, setActiveCard] = useState(activeCardArray);

  function handleClick(index) {
    let arr = [...activeCardArray];
    arr[index] = true;
    setActiveCard(arr);
  }
  return (
    <>
      {articles.map((each, index) => (
        <Card
          {...each}
          key={index}
          index={index}
          activeCard={activeCard}
          setActiveCard={setActiveCard}
          increaseAmount={increaseAmount}
          increaseBackers={increaseBackers}
          handleLabelClick={handleClick}
          finished={finished}
        />
      ))}
    </>
  );
};

export default Cards;
