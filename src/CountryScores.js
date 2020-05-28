import React, { useState } from "react";
import SortButton from "./SortButton";
import ContainerCountryScores from "./ContainerCountryScores";

const CountryScores = props => {
  const { scores } = props;

  const [value, setValue] = useState(scores);
  const [buttonToggle, setButtonToggle] = useState(true);

  scores.sort((a, b) => {
    const aName = a.name.toLowerCase();
    const bName = b.name.toLowerCase();
    return aName < bName ? -1 : aName > bName ? 1 : 0;
  });

  const sortDeScores = () => {
    setButtonToggle(false);
    setValue(
      scores.map(score => {
        return score.scores.sort((a, b) => Number(a.s) - Number(b.s));
      })
    );
  };
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
      <ContainerCountryScores scores={scores} />
    </div>
  );
};
export default CountryScores;
