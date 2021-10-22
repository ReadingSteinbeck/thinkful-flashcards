import React from "react";
import { useHistory } from "react-router-dom";

function CardForm({ handleSubmit, handleChange, deck, cardData }) {
  const history = useHistory();
  return (
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
  );
}

export default CardForm;
