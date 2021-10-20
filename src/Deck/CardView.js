import React from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import { deleteCard } from "../utils/api";
function CardView({ card }) {
  //handlers
  const handleDeleteCard = async () => {
    const message = "Delete this Card? You will not be able to recover it.";
    const result = window.confirm(message);
    if (result) {
      await deleteCard(card.id);
      history.go(0);
    }
  };

  const { url } = useRouteMatch();
  const history = useHistory();
  return (
    <div className="card">
      <p>{card.front}</p>
      <p>{card.back}</p>
      <div>
        <button
          type="button"
          className=" btn btn-secondary m-1"
          onClick={() => history.push(`${url}/cards/${card.id}/edit`)}
        >
          Edit
        </button>
        <button
          type="button"
          className=" btn btn-danger m-1"
          onClick={handleDeleteCard}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
export default CardView;
