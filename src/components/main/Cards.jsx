import React from "react";
import Card from "./Card";
import article from "../../assets/articles.json";

const Cards = ({ showModal }) => {
  return (
    <>
      {article
        .filter((each) => each.modalOnly !== true)
        .map((each) => (
          <Card {...each} key={each.heading} setShowMainModal={showModal} />
        ))}
    </>
  );
};

export default Cards;
