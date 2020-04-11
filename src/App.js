import React from "react";
import Box from "./box/box";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="topContainer">
        <div className="topBody">teamsux - your team sucks</div>
      </div>
      <div className="appBody">
        <div className="searchBar">
          <Box />
        </div>
      </div>
    </div>
  );
}

export default App;
