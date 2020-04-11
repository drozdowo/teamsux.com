import React from "react";
import axios from "axios";

export default class Box extends React.Component {
  constructor() {
    super();
    this.state = {
      enteredName: null,
    };
    return this;
  }

  userKeyDown = async (evt) => {
    if (evt.key === "Enter") {
      let resp = await axios.get(
        `http://localhost:3000/checkPlayer/${this.state.enteredName}`
      );
      console.log(resp.data);
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
