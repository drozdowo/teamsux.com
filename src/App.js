import React from "react";
import Box from "./box/box";
import Report from "./report/report";
import Loading from "./loading/loading";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      activeEl: "home",
    };
  }

  setActiveElement = (switchTo, params) => {
    this.setState({
      activeEl: switchTo,
      data: params.data,
    });
  };

  render = () => {
    let activeEl = null;
    if (this.state.activeEl === "loading") {
      activeEl = <Loading />;
    } else if (this.state.activeEl === "report") {
      activeEl = <Report params={this.state.data} />;
    } else {
      activeEl = (
        <div>
          <h1 className="searchBar">Enter your summoner name:</h1>
          <Box
            setActiveElement={this.setActiveElement}
            params={this.props.data}
          />
        </div>
      );
    }

    return (
      <div className="App">
        <div className="topContainer">
          <div className="topBody">teamsux - your team sucks</div>
        </div>
        <div className="appBody">{activeEl}</div>
      </div>
    );
  };
}

export default App;
