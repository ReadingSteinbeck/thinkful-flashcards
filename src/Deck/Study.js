import React from "react";
import { Link } from "react-router-dom";
import StudyCard from "./StudyCard";
function Study({ deck }) {
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
              Study
            </li>
          </ol>
        </nav>
      </div>
      <h1>{deck.name}: Study</h1>
      <div>
        <StudyCard deck={deck} />
      </div>
    </div>
  );
}
export default Study;
