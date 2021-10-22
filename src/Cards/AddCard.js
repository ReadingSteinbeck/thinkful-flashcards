import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { createCard } from "./../utils/api/index";
import CardForm from "./CardForm";

function AddCard({ deck }) {
  const initialCardState = {
    front: "",
    back: "",
  };
  //Creates cardData object State
  const [cardData, setCardData] = useState({ ...initialCardState });

  //Handlers
  const handleChange = ({ target }) => {
    setCardData({
      ...cardData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = async () => {
    await createCard(deck.id, cardData);
    setCardData({ ...initialCardState });
  };

  return (
    <div>
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to={`/decks/${deck.id}`}>{deck.name}</Link>{" "}
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Add Card
            </li>
          </ol>
        </nav>
      </div>
      <div>
        <h1>{deck.name} : Add Card</h1>
      </div>
      <div>
        <CardForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          deck={deck}
          cardData={cardData}
        />
      </div>
    </div>
  );
}
export default AddCard;
