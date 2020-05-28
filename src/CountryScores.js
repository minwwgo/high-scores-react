import React, { useState } from "react";
import SortButton from "./SortButton";
import ContainerCountryScores from "./ContainerCountryScores";
import WorldScore from "./WorldScore";

const CountryScores = props => {
  //destruction
  const { scores } = props;
  // assign value
  const [value, setValue] = useState(scores);
  const [buttonToggle, setButtonToggle] = useState(true);
  // sort country name
  scores.sort((a, b) => {
    const aName = a.name.toLowerCase();
    const bName = b.name.toLowerCase();
    return aName < bName ? -1 : aName > bName ? 1 : 0;
  });
  // sort descending scores
  const sortDeScores = () => {
    setButtonToggle(false);
    setValue(
      scores.map(score => {
        return score.scores.sort((a, b) => Number(a.s) - Number(b.s));
      })
    );
  };
  //sort ascending scores
  const sortAcScores = () => {
    setButtonToggle(true);
    setValue(
      scores.map(score => {
        return score.scores.sort((a, b) => Number(b.s) - Number(a.s));
      })
    );
  };

  return (
    <div className="container text-center border ">
      <h1> High Scores Per Country</h1>

      <SortButton
        sortDeScores={sortDeScores}
        sortAcScores={sortAcScores}
        buttonToggle={buttonToggle}
      />
      <WorldScore scores={scores} />
      <ContainerCountryScores scores={scores} />
    </div>
  );
};
export default CountryScores;
