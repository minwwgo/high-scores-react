import React from "react";

const WorldScore = props => {
  const { scores } = props;

  return (
    <div>
      {scores.map(eachData => {
        const result = eachData.scores.reduce((a, b) => {
          return a.s > b.s ? a : b;
        });
        return (
          <p>
            {" "}
            {result.n}
            {result.s}
          </p>
        );
      })}
    </div>
  );
};

export default WorldScore;
