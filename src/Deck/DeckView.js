import React, { useState, useEffect } from "react";
import { useParams, Switch, Route, useRouteMatch } from "react-router-dom";
import { readDeck } from "../utils/api";
import Deck from "./Deck";
import Study from "./Study";
import EditDeck from "./EditDeck";

function DeckView() {
  //Creates state for Deck
  const [deck, setDeck] = useState("");

  //Retrieves deckId from address bar Parameters
  const deckId = useParams().deckId;

  const { url } = useRouteMatch();

  //This useEffect function loads the deck from the API so the can be rendered to the DOM
  useEffect(() => {
    async function loadDeck() {
      const results = await readDeck(deckId);
      setDeck(results);
    }
    loadDeck();
  }, [deckId]);
  return (
    <Switch>
      <Route exact path={url}>
        <Deck deck={deck} />
      </Route>
      <Route path={`${url}/study`}>
        <Study deck={deck} />
      </Route>
      <Route path={`${url}/edit`}>
        <EditDeck deck={deck} />
      </Route>
    </Switch>
  );
}
export default DeckView;
