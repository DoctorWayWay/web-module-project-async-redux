// Library Imports
import React, { useEffect } from "react";
import { connect } from "react-redux";

// Action Imports
import { getDog } from "./actions";

const App = ({ dogImage, getDog, error, isFetching }) => {
  useEffect(() => {
    getDog();
  }, []);

  const handleNewDog = (event) => {
    event.preventDefault();
    getDog();
  };

  return (
    <div className="app">
      <h1 className="app__title">Random Doggo Finder 3000</h1>
      {error && <h2 className="error">{error}</h2>}
      {isFetching && (
        <h2 className="fetching">&#128054; Searching for doggo &#128054;</h2>
      )}
      {isFetching === false && (
        <img
          className="app__image"
          src={dogImage}
          alt="First a white poodle, then a random dog"
        />
      )}
      <button className="button" onClick={handleNewDog}>
        Get New Doggo
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    dogImage: state.dogImage,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getDog })(App);
