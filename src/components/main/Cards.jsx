import React from "react";
import Card from "./Card";
import article from "../../assets/articles.json";

const Cards = () => {
  return (
    <>
      {article
        .filter((each) => each.modalOnly !== true)
        .map((each) => (
          <Card {...each} key={each.heading} />
        ))}
    </>
  );
};

export default Cards;
