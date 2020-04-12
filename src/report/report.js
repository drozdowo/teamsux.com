import React from "react";
import ChampionSquare from "./champSquare/champSquare";
import Box from "../box/box";
import "./report.css";

export default class Report extends React.Component {
  getRoleFeederMap = () => {
    let roles = this.props.params.feederRoleMap;
    let accept = Math.max(parseInt(Object.values(roles)));
    let roleList = [];
    while (accept >= 1) {
      Object.keys(roles).map((role) => {
        if (accept == roles[role]) {
          if (roleList.length >= 3) {
            return roleList;
          }
          roleList.push(
            <div className="mainStats">
              <div className="statPair">
                <p
                  className={(() => {
                    if (roleList.length == 0) {
                      return "stat";
                    } else {
                      return "stat2";
                    }
                  })()}
                >
                  {(() => {
                    if (
                      role === "DUO_SUPPORT NONE" ||
                      role === "DUO_SUPPORT BOTTOM"
                    ) {
                      return "Support";
                    }
                    if (role === "DUO NONE" || role === "DUO_CARRY BOTTOM") {
                      return "Marksman";
                    }
                    if (role === "SOLO TOP") {
                      return "Top";
                    }
                    if (role === "SOLO MIDDLE") {
                      return "Mid";
                    }
                    return "Jungle";
                  })()}
                </p>
                <div
                  className={(() => {
                    if (roleList.length == 0) {
                      return "stat";
                    } else {
                      return "stat2";
                    }
                  })()}
                >
                  {roles[role]}
                </div>
              </div>
            </div>
          );
        }
      });
      accept--;
    }
    return roleList;
  };

  getChampFeederMap = () => {
    let champs = this.props.params.feederChampMap;
    let accept = Math.max(parseInt(Object.values(champs)));
    let champList = [];
    while (accept >= 1) {
      Object.keys(champs).map((champ) => {
        if (accept == champs[champ]) {
          if (champList.length >= 3) {
            return champList;
          }
          champList.push(
            <ChampionSquare
              key={champ}
              champName={champ}
              gamesFed={champs[champ]}
            />
          );
        }
      });
      accept--;
    }
    return champList;
  };

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
            <p>{`Losses with a feeder:`} </p>
            <div className="stat">{this.props.params.lossesWithAFeeder}</div>
          </div>
          <div className="statPair">
            <p>{`Losses with more than 1 feeder:`} </p>
            <div className="stat">
              {this.props.params.lossesMoreThan1Feeder}
            </div>
          </div>
        </div>
        <div className="headerReport">
          <h3 className="headerText3"> Top Feeders: </h3>
        </div>
        <div className="topFeeders">{this.getChampFeederMap()}</div>
        <div className="topRoles">{this.getRoleFeederMap()}</div>
        <div className="searchBox">
          <div>
            <h1 className="searchBar"> Want to search again?:</h1>
            <Box
              setActiveElement={this.props.setActiveElement}
              params={this.props.data}
            />
          </div>
        </div>
      </div>
    );
  };
}
