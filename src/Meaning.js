import React from "react";
import Synonyms from "./Synonyms";
import "./meanings.css";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <div className="definition">
                definition: {definition.definition}
              </div>
              <br />
              <div className="example">Ex. {definition.example}</div>
              <br />
              <Synonyms synonyms={definition.synonyms} />
              <div className="synonym">Synonyms: {definition.synonyms}</div>
            </p>
          </div>
        );
      })}
    </div>
  );
}
