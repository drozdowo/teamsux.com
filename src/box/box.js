import React from "react";
import axios from "axios";
import "./box.css";

export default class Box extends React.Component {
  constructor() {
    super();
    this.state = {
      enteredName: null,
    };
    return this;
  }

  getEndpoint = () => {
    if (window.location.toString().includes("localhost")) {
      return "http://localhost:3001";
    } else {
      return "http://teamsux.com/api";
    }
  };

  userKeyDown = async (evt) => {
    if (evt.key === "Enter") {
      axios
        .get(
          `${this.getEndpoint()}/checkPlayerSummary/${this.state.enteredName}`
        )
        .then((resp) => {
          this.props.setActiveElement("report", resp);
        })
        .catch((err) => {
          this.props.setActiveElement("home", { data: "error", error: err });
        });
      this.props.setActiveElement("loading", {});
    }
  };

  onTextChange = (evt) => {
    this.setState({
      enteredName: evt.target.value,
    });
  };

  render = () => {
    return (
      <div>
        <input
          type="textbox"
          onKeyDown={this.userKeyDown}
          onChange={this.onTextChange}
        />
      </div>
    );
  };
}
