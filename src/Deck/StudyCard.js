import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function StudyCard({ deck }) {
  //Sets state for flipping card
  const [isCardFront, setIsCardFront] = useState(true);
  //Sets state from which card to display
  const [currentCard, setCurrentCard] = useState(0);

  const history = useHistory();

  if (deck.id) {
    const studyCards = deck.cards.map((card, index) => {
      if (isCardFront === true && index === currentCard)
        return (
          <li key={index}>
            <div className="deck border border-secondary mt-1">
              <div>
                <h2>
                  {index + 1} of {deck.cards.length}
                </h2>
                <p>{card.front}</p>
              </div>
              <div>
                <button
                  type="button"
                  className=" btn btn-secondary m-1"
                  onClick={() => setIsCardFront(false)}
                >
                  Flip
                </button>
              </div>
            </div>
          </li>
        );
      if (isCardFront === false && index === currentCard)
        return (
          <li key={index}>
            <div className="deck border border-secondary mt-1">
              <div>
                <h2>
                  {index + 1} of {deck.cards.length}
                </h2>
                <p>{card.back}</p>
              </div>
              <div>
                <button
                  type="button"
                  className=" btn btn-secondary m-1"
                  onClick={() => setIsCardFront(true)}
                >
                  Flip
                </button>
                <button
                  type="button"
                  className=" btn btn-primary m-1"
                  onClick={() => {
                    setIsCardFront(true);
                    setCurrentCard(currentCard + 1);
                  }}
                >
                  Next
                </button>
              </div>
            </div>
          </li>
        );
    });
    if (deck.cards.length < currentCard + 1 && deck.cards.length > 3) {
      const message = `Restart Cards? Click 'cancel' to return to the home page`;
      const result = window.confirm(message);
      result ? setCurrentCard(0) : history.push("/");
    }
    if (deck.cards.length <= 2) {
      return (
        <div>
          <div>
            <div>
              <h2>Not Enough Cards</h2>
            </div>
            <div>
              <p>
                You need at least 3 cards to study. There are{" "}
                {deck.cards.length} cards in this deck.
              </p>
            </div>
            <div>
              <button type="button" className="btn btn-primary m-1">
                + Add Cards
              </button>
            </div>
          </div>
        </div>
      );
    }
    return <ul>{studyCards}</ul>;
  }
  return <p>Something went wrong</p>;
}
export default StudyCard;
