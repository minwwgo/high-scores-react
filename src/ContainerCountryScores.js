import React from "react";

const ContainerCountryScores = props => {
  return (
    <div className="row p-3 m-3 ">
      {props.scores.map((score, index) => {
        return (
          <div key={index} className="col-12  border d-flex m-2">
            <div className="card m-2" style={{ width: "100%" }}>
              <div className="card-header bg-info  text-center">
                <strong>HIGH SCORES: {score.name}</strong>
              </div>

              <ul className="list-group list-group-flush">
                {score.scores.map((scoreEach, index) => {
                  return (
                    <li
                      key={index}
                      className="list-group-item d-flex justify-content-around "
                    >
                      <span>{scoreEach.n}</span>
                      <span>{scoreEach.s}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ContainerCountryScores;
