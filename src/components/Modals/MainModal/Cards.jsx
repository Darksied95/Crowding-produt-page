import React from "react";
import articles from "../../../assets/articles.json";
import Card from "./Card";

const Cards = () => {
  return (
    <>
      {articles.map((each) => (
        <Card {...each} />
      ))}
    </>
  );
};

export default Cards;
