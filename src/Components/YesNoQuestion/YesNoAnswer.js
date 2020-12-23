import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Context } from "../../AppContext";
import SingleCard from "../SingleCard/SingleCard";

const YesNoAnswer = () => {
  const { showYNA, cardDeck, showCardModal, userQuestion } = useContext(
    Context
  );

  if (!showYNA) {
    return null;
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={6} sm={4} md={3}>
          <SingleCard
            src={cardDeck[0].image}
            alt={cardDeck[0].name}
            delay={0}
            value={cardDeck[0].id}
            onClick={() => showCardModal(cardDeck[0])}
          />
        </Col>
        <Col xs={12} sm={8} md={9} className="tarot-read animated fadeIn delay-1s slower">
          <p>Your question: {userQuestion}</p>
          <hr />
          <p>{cardDeck[0].yesno}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default YesNoAnswer;
