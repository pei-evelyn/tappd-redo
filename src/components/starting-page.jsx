import React from 'react';

const StartingPage = props => {
  return (
    <div className="content">
      <div className="logo-container">
        <div className="logo-icons">
          <i className="logo fas fa-glass-martini-alt"></i>
          <i className="logo fas fa-beer"></i>
        </div>
        <h1 className="logo-text">TAPPD</h1>
      </div>
        <button
          className="btn btn-lg btn-secondary start-btn"
          onClick={() => props.setView('homepage', {})}
        >
          LET'S GO
        </button>
    </div>
  )
}

export default StartingPage;
