import React from "react";
import CardView from "./CardView";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import { deleteDeck } from "./../utils/api/index";
function Deck({ deck }) {
  const history = useHistory();
  const { url } = useRouteMatch();

  //handlers
  const deleteDeckHandler = async () => {
    const message = "Delete this deck? You will not be able to recover it.";
    const result = window.confirm(message);
    if (result) {
      await deleteDeck(deck.id);
      history.push("/");
    }
  };

  if (deck.id) {
    const cardList = deck.cards.map((card, index) => (
      <li key={index}>
        <CardView card={card} />
      </li>
    ));
    return (
      <div>
        <div>
          {/* Breadcrumbs */}
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">{deck.name}</li>
            </ol>
          </nav>
        </div>
        <div className="deck border border-secondary mt-1">
          <h2>{deck.name}</h2>
          <p>{deck.cards.length} cards</p>
          <p>{deck.description}</p>
          <button
            type="button"
            className=" btn btn-secondary m-1"
            onClick={() => history.push(`${url}/edit`)}
          >
            Edit
          </button>
          <button
            type="button"
            className=" btn btn-primary m-1"
            onClick={() => history.push(`${url}/study`)}
          >
            Study
          </button>
          <button
            type="button"
            className=" btn btn-primary m-1"
            onClick={() => history.push(`${url}/cards/new`)}
          >
            + Add Cards
          </button>

          <button
            type="button"
            className=" btn btn-danger m-1"
            onClick={deleteDeckHandler}
          >
            Delete
          </button>
        </div>
        <div className="card-list">
          <h2> Cards</h2>
          <ul>{cardList}</ul>
        </div>
      </div>
    );
  }
  return <div>Something Went Wrong</div>;
}

export default Deck;
