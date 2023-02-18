import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center">
          Coded by Darleen Man & is{" "}
          <a href="https://github.com/darleeenman/dictionary-react">
            open-sourced
          </a>
          <a href="https://grand-cajeta-df1dd6.netlify.app/"> + Netlify.</a>
        </footer>
      </div>
    </div>
  );
}
