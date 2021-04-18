import React from 'react';

const Homepage = props => {
  return (
    <div>
      <h1 className="">Let's grab a drink.</h1>
      <div className="button-container">
        <button
          className="btn btn-lg btn-secondary"
          onClick={() => props.setView('search-recipes', {})}
        >
          STAY IN
        </button>
        <button
          className="btn btn-lg btn-secondary"
          onClick={() => props.setView('search-breweries', {})}
        >
          GO OUT
        </button>
      </div>
    </div>
  );
}

export default Homepage;
