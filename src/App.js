import React from "react";
import "./styles.css";
import CountryScores from "./CountryScores";
import allCountryScores from "./scores.js";

const App = () => {
  return <CountryScores scores={allCountryScores} />;
};
export default App;
