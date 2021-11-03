// Library Imports
import React from "react";
import { connect } from "react-redux";

// Action Imports
import { getDog } from "./actions";

const App = ({ dogImage, getDog }) => {
  const handleNewDog = (event) => {
    event.preventDefault();
    getDog();
  };

  return (
    <div className="app">
      <h1>Random Doggo Finder 3000</h1>
      <img src={dogImage} alt="First a white poodle, then a random dog" />
      <button onClick={handleNewDog}>New Doggo</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    dogImage: state.dogImage,
  };
};

export default connect(mapStateToProps, { getDog })(App);
