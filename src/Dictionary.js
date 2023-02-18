import React, { useState } from "react";
import axios from "axios";
import "./dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();

    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

    axios.get(apiURL).then(handleResponse);

    let pexelsApiKey =
      "P4aBuFZdozP00POQFXn0Wx21uPEwythWIwjVE0HhcEhpS4xIhXgy3doc";

    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;

    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="look for a word.."
          className="search"
          onChange={handleKeywordChange}
        />
        <input type="submit" value="search" className="btn" />
      </form>
      <br />
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}
