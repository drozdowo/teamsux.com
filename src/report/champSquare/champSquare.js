import React from "react";
import "./champsquare.css";

export default class ChampionSquare extends React.Component {
  render = () => {
    return (
      <div className="champTile">
        <img
          src={`https://ddragon.leagueoflegends.com/cdn/10.7.1/img/champion/${this.props.champName}.png`}
          alt={`${this.props.champName}`}
        />
        <h3 className="gamesFed"> {this.props.gamesFed} games </h3>
      </div>
    );
  };
}
