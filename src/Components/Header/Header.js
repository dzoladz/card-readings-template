import React, { useContext } from "react";
import { Jumbotron } from "react-bootstrap";
import Button from "../Button/Button";
import { Context } from "../../AppContext";

const Header = () => {
  const { threeCardDraw, yesNoAnswer, exploreTheDeck } = useContext(Context);

  return (
    <Jumbotron fluid className="jumbotron text-center p-3">
      <h1 className="display-4 text-light">Speculative Card Deck</h1>
      <Button name="Past, Present, Future" onClick={threeCardDraw} />
      <Button name="Draw One Card" onClick={yesNoAnswer} />
      <Button name="Explore the Deck" onClick={exploreTheDeck} />
    </Jumbotron>
  );
};

export default Header;
