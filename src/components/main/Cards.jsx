import React from "react";
import Card from "./Card";
import article from "../../assets/articles.json";

const Cards = ({ showModal, remaining }) => {
  return (
    <>
      {article
        .filter((each) => each.modalOnly !== true)
        .map((each) => (
          <Card
            {...each}
            key={each.heading}
            setShowMainModal={showModal}
            remaining={remaining}
          />
        ))}
    </>
  );
};

export default Cards;
