import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { updateDeck } from "./../utils/api/index";
function EditDeck({ deck }) {
  //Creates deckData object State
  const [deckData, setDeckData] = useState({ ...deck });

  //handlers
  const handleChange = ({ target }) => {
    setDeckData({
      ...deckData,
      [target.name]: target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateDeck(deckData);

    history.push("/");
  };

  const history = useHistory();
  return (
    <div>
      <div>
        {/* Breadcrumbs */}
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to={`/decks/${deck.id}`}>{deck.name}</Link>{" "}
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Edit Deck
            </li>
          </ol>
        </nav>
      </div>
      <div>
        <h1>Edit Deck</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">
            Name
            <br />
            <input
              type="text"
              name="name"
              value={deckData.name}
              id="name"
              onChange={handleChange}
            ></input>
          </label>
          <br />
          <label htmlFor="description">
            Description
            <br />
            <textarea
              name="description"
              id="description"
              value={deckData.description}
              rows="5"
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
  );
}
export default EditDeck;
