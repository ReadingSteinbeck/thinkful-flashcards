import React, { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { readCard } from "./../utils/api/index";
function EditCard({ deck }) {
  //Creates const for cardId Parameter
  const cardId = useParams().cardId;
  const currentCard = deck.cards[cardId - 1];

  //Creates cardData object State
  const [cardData, setCardData] = useState({ ...currentCard });

  //Handlers
  const handleChange = ({ target }) => {
    setCardData({
      ...cardData,
      [target.name]: target.value,
    });
  };
  console.log(cardData);
  const handleSubmit = async () => {
    history.push(`/decks/${deck.id}`);
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
              Cancel
            </button>
            <button type="submit" className=" btn btn-primary m-1">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default EditCard;
