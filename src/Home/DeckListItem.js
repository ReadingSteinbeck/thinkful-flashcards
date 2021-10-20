import React from "react";
import { useHistory } from "react-router-dom";
import { deleteDeck } from "../utils/api";

function DeckListItem({ deck }) {
  const history = useHistory();
  //handlers

  //this works but does not update
  const deleteDeckHandler = async () => {
    const message = "Delete this deck? You will not be able to recover it.";
    const result = window.confirm(message);
    if (result) {
      await deleteDeck(deck.id);
      history.go(0);
    }
  };
  return (
    <div className="deck border border-secondary m-1">
      <h2>{deck.name}</h2>
      <p>{deck.cards.length} cards</p>
      <p>{deck.description}</p>
      <button
        type="button"
        className=" btn btn-secondary m-1"
        onClick={() => history.push(`/decks/${deck.id}`)}
      >
        View
      </button>
      <button
        type="button"
        className=" btn btn-primary m-1"
        onClick={() => history.push(`/decks/${deck.id}/study`)}
      >
        Study
      </button>
      <button
        type="button"
        className=" btn btn-danger m-1"
        onClick={deleteDeckHandler}
      >
        Delete
      </button>
    </div>
  );
}
export default DeckListItem;
