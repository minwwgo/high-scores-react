import React from "react";

const WorldScore = (props) => {
  const { scores } = props;

  return (
    <div className="card">
      <h1 className="card-header bg-info  text-center">world score</h1>
      <ul className="list-group list-group-flush">
        {scores.map((eachData) => {
          const result = eachData.scores.reduce((a, b) => {
            return a.s > b.s ? a : b;
          });
          return (
            <li className="list-group-item d-flex justify-content-around ">
              <span>{result.n}</span>
              <span>{result.s}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WorldScore;
