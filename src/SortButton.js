import React from "react";

const SortButton = props => {
  return (
    <div>
      {props.buttonToggle ? (
        <button onClick={props.sortDeScores}> Sorting DE Scores</button>
      ) : (
        <button onClick={props.sortAcScores}> Sort AC Scores</button>
      )}
    </div>
  );
};

export default SortButton;
