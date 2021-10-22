import React, { useState, useEffect } from "react";
import DeckList from "./DeckList";
import { listDecks } from "../utils/api";
import { useRouteMatch, Switch, Route, useHistory } from "react-router-dom";

function Home() {
  //States
  const [decks, setDecks] = useState([]);

  //Gets URL for routing
  const { url } = useRouteMatch();

  //defines history object
  const history = useHistory();

  //This useEffect function loads the decks from the API so the can be rendered to the DOM
  useEffect(() => {
    async function loadDecks() {
      const results = await listDecks();
      setDecks(results);
    }
    loadDecks();
  }, []);

  return (
    <div className="home">
      <Switch>
        <Route exact path={url}>
          <div className="create-deck-btn">
            <button
              type="button"
              className=" m-1   btn btn-secondary"
              onClick={() => history.push("/decks/new")}
            >
              + Create Deck
            </button>
          </div>
          <div className="deck-list">
            <DeckList decks={decks} />
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default Home;
