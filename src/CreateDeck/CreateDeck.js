import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { createDeck } from "./../utils/api/index";
function CreateDeck() {
  const initialDeckState = {
    name: "",
    description: "",
  };
  //Creates deckData object State
  const [deckData, setDeckData] = useState({ ...initialDeckState });

  const history = useHistory();

  //Handlers
  const handleChange = ({ target }) => {
    setDeckData({
      ...deckData,
      [target.name]: target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await createDeck(deckData);

    setDeckData({ ...initialDeckState });
    history.push(`/decks/${result.id}`);
  };

  return (
    <div>
      <div>
        {/* Breadcrumbs */}
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>

            <li className="breadcrumb-item active" aria-current="page">
              Create Deck
            </li>
          </ol>
        </nav>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <h1>Create Deck</h1>
          <label htmlFor="name">
            Name
            <br />
            <input
              type="text"
              name="name"
              value={deckData.name}
              id="name"
              onChange={handleChange}
              placeholder="Deck Name"
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
              placeholder="Brief description of the deck"
              rows="5"
              onChange={handleChange}
            ></textarea>
          </label>
        </div>
        <div className="btns">
          <button
            type="button"
            className=" btn btn-secondary m-1"
            onClick={() => history.push("/")}
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
export default CreateDeck;
