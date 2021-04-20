import React from 'react';

const BreweryListItem = props => {
  return (
    <div className="brewery-item-container"
      onClick={() => props.setView('brewery-details', props.breweryInfo)}>
      <img src="" />
      <h3>{props.breweryInfo.name}</h3>
      <h5>{props.breweryInfo.city}</h5>
      <h5>{props.breweryInfo.state}</h5>
    </div>
  )
}

export default BreweryListItem;
