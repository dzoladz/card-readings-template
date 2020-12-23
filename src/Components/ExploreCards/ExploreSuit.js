import React, { useContext } from "react";
import {Row, Col} from "react-bootstrap"
import cardsJSON from "../JSON/deck.json";
import { Context } from "../../AppContext";
import SingleCard from "../SingleCard/SingleCard";

const ExploreSuit = () => {
  const { displaySuit, showCardModal } = useContext(Context);
  const tarot = [...cardsJSON];

  if (displaySuit.length === 0) {
    return null;
  }
  return (
    <Row className="justify-content-center">
      <Col xs={12} className="explore-title">
        <h1>{displaySuit.name}</h1>
      </Col>
      {tarot.slice(displaySuit.min, displaySuit.max).map((card) => (
        <Col xs={4} md={3} lg={2} key={card.id} className="p-1">
          <SingleCard
            src={card.image}
            alt={card.name}
            value={card.id}
            onClick={() => showCardModal(card)}
          />
        </Col>
      ))}      
    </Row>

  );
};

export default ExploreSuit;
