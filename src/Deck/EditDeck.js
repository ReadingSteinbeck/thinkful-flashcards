import React, { useState, useEffect } from "react";
import { useHistory, Link, useParams } from "react-router-dom";
import { updateDeck, readDeck } from "./../utils/api/index";
function EditDeck({ deck }) {
  //Added to prevent uncontrolled component
  const initialDeckState = {
    name: "",
    description: "",
  };
  //Creates deckData object State
  const [deckData, setDeckData] = useState({ ...initialDeckState });
  const deckId = useParams().deckId;

  //added to pass test although app functions the same passing through result of this function
  // as a prop of EditDeck
  useEffect(() => {
    async function loadDeck() {
      const results = await readDeck(deckId);
      setDeckData(results);
    }
    loadDeck();
  }, [deckId]);

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
            onClick={() => history.push(`/decks/${deckData.id}`)}
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
