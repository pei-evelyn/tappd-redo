import React from 'react';

const BreweryListItem = props => {
  return (
    <div className="brewery-item-container" onClick={() => props.setView('brewery-details', brewery)}}>
      <img src="">
      <h3>{props.brewery.name}</h3>
      <h5>{props.brewery.city}, {props.brewery.state}</h5>
    </div>
  )
}

export default BreweryListItem;
