import React from "react";
import DeckListItem from "./DeckListItem";

function DeckList({ decks }) {
  const deckList = decks.map((deck) => (
    <li key={deck.id}>
      <DeckListItem deck={deck} />
    </li>
  ));
  return (
    <div>
      <ul>{deckList}</ul>
    </div>
  );
}

export default DeckList;
