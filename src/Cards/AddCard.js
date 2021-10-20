import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { createCard } from "./../utils/api/index";

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

  const history = useHistory();

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
        <form onSubmit={handleSubmit}>
          <div className="text-area">
            <label htmlFor="front">
              Front
              <br />
              <textarea
                name="front"
                id="front"
                value={cardData.front}
                placeholder="Front side of card"
                rows="3"
                onChange={handleChange}
              ></textarea>
            </label>
            <label htmlFor="back">
              Back
              <br />
              <textarea
                name="back"
                id="back"
                value={cardData.back}
                placeholder="Back side of card"
                rows="3"
                onChange={handleChange}
              ></textarea>
            </label>
          </div>
          <div className="btns">
            <button
              type="button"
              className=" btn btn-secondary m-1"
              onClick={() => history.push(`/decks/${deck.id}`)}
            >
              Done
            </button>
            <button type="submit" className=" btn btn-primary m-1">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default AddCard;
