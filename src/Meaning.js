import React from "react";
import Synonyms from "./synonyms";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <small>{props.meaning.partOfSpeech}</small>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <strong>Definition: {definition.definition}</strong>
              <br />
              <strong>Example:</strong>
              <em>{definition.example}</em>
              <br />
              <Synonyms synonyms={definition.synonyms} />
              <strong>Synonyms: </strong>
              {definition.synonyms}
            </p>
          </div>
        );
      })}
    </div>
  );
}
