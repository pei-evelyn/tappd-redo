import React from 'react';

function Homepage(props) {
  return (
    <>
      <h1 className="text-center">Let's grab a drink.</h1>
      <div className="button-container">
        <button
          className="btn btn-lg btn-secondary"
          onClick={() => this.props.setView('search-recipes', {})}
        >
          STAY IN
        </button>
        <button
          className="btn btn-lg btn-secondary"
          onClick={() => this.props.setView('search-breweries', {})}
        >
          GO OUT
        </button>
      </div>
    </>
  );
}

export default Homepage;
