import React from "react";

const CountryScores = props => {
  const { scores } = props;

  scores.sort((a, b) => {
    const aName = a.name.toLowerCase();
    const bName = b.name.toLowerCase();
    return aName < bName ? -1 : aName > bName ? 1 : 0;
  });
  scores.map(e => {
    console.log(e);
    e.scores.sort((a, b) => Number(b.s) - Number(a.s));
  });

  const scoresCountry = scores.map(score => {
    return (
      <div className="col-12  border d-flex m-2">
        <div className="card m-2" style={{ width: "100%" }}>
          <div className="card-header bg-info  text-center">
            <strong>HIGH SCORES: {score.name}</strong>{" "}
          </div>
          <ul className="list-group list-group-flush">
            {score.scores.map(scoreEach => {
              return (
                <li className="list-group-item d-flex justify-content-around ">
                  <span>{scoreEach.n}</span>
                  <span>{scoreEach.s}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  });
  return (
    <div className="container text-center border ">
      High Scores Per Country
      <div className="row p-3 m-3 ">{scoresCountry}</div>
    </div>
  );
};
export default CountryScores;
