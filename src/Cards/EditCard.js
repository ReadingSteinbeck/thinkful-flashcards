import React, { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { readCard, updateCard } from "./../utils/api/index";
import CardForm from "./CardForm";
function EditCard({ deck }) {
  //Creates const for cardId Parameter
  const cardId = useParams().cardId;

  //Creates cardData object State
  const [cardData, setCardData] = useState({});
  //This use effect function loads the card using cardId param and sets that card as cardData state
  useEffect(() => {
    async function loadCard() {
      const card = await readCard(cardId);
      setCardData({ ...card });
    }
    loadCard();
  }, [cardId]);

  //Handlers
  const handleChange = ({ target }) => {
    setCardData({
      ...cardData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateCard(cardData);
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
              Edit Card {cardId}
            </li>
          </ol>
        </nav>
      </div>
      <div>
        <h1>Edit Card</h1>
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
export default EditCard;
