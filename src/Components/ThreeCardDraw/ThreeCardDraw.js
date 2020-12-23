import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Context } from "../../AppContext";
import SingleCard from "../SingleCard/SingleCard";

const ThreeCardDraw = () => {
  const { showTCD, cardDeck, showCardModal } = useContext(Context);
  const [td, setTD] = useState(cardDeck);

  useEffect(() => {
    setTD(cardDeck);
  }, [cardDeck]);

  if (!showTCD) {
    return null;
  }

  return (
    <Container>
      <Row className="justify-content-center animated mb-4">
        {td.slice(0, 3).map((tarot, i) => (
          <Col xs={4} md={3} lg={2} key={tarot.id} className="p-1">
            <SingleCard
              src={tarot.image}
              alt={tarot.name}
              delay={i}
              value={tarot.id}
              onClick={() => showCardModal(tarot)}
            />
          </Col>
        ))}
        <Col xs={10} className="tarot-read animated fadeIn delay-3s slower">
          <p>
            <b>The Past:</b> ({cardDeck[0].name}) {cardDeck[0].past}
          </p>
          <p>
            <b>The Present:</b> ({cardDeck[1].name}) {cardDeck[1].present}
          </p>
          <p>
            <b>The Future:</b> ({cardDeck[2].name}) {cardDeck[2].future}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default ThreeCardDraw;
