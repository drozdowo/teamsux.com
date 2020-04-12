import React from "react";
import "./report.css";

export default class Report extends React.Component {
  render = () => {
    console.log(this.props.params);
    return (
      <div className="reportBody">
        <div className="headerReport">
          <h1 className="headerText"> {this.props.params.name}</h1>
          <h3 className="headerText3"> NA </h3>
        </div>
        <div className="mainStats">
          <div className="statPair">
            <p>{`Games >=1 KDA:`} </p>
            <div className="stat">{this.props.params.gamesMoreThan1}</div>
          </div>
          <div className="statPair">
            <p>{`Games <1 KDA:`} </p>
            <div className="stat">{this.props.params.gamesLessThan1}</div>
          </div>
          <div className="statPair">
            <p>{`Feeders:`} </p>
            <div className="stat">{this.props.params.feeders}</div>
          </div>
          <div className="statPair">
            <p>{`Games with a feeder:`} </p>
            <div className="stat">{this.props.params.lossesWithAFeeder}</div>
          </div>
          <div className="statPair">
            <p>{`Games with more than 1 feeder:`} </p>
            <div className="stat">
              {this.props.params.lossesMoreThan1Feeder}
            </div>
          </div>
        </div>
      </div>
    );
  };
}
