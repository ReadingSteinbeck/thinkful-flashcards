import React from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
function CardView({ card }) {
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
        <button type="button" className=" btn btn-danger m-1">
          Delete
        </button>
      </div>
    </div>
  );
}
export default CardView;
