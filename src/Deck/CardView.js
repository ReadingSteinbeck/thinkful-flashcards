import React from "react";
function CardView({ card }) {
  return (
    <div className="card">
      <p>{card.front}</p>
      <p>{card.back}</p>
      <div>
        <button type="button" className=" btn btn-secondary m-1">
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
