import React from 'react';

const BreweryDetails = props => {
  const brewery = props.brewery;

  return (
    <div className="details-container">
      <h1>{brewery.name}</h1>
      <h3>Type: {brewery.brewery_type}</h3>
      <div className="address-container">
        <h3>Address</h3>
        <p>{brewery.street}</p>
        <p>{brewery.city}, {brewery.state} {brewery.postal_code}</p>
      </div>
      <div className="website-container">
        <h3>Website</h3>
        <a href={brewery.website_url}>Click Here!</a>
      </div>
      <div className="phone-container">
        <h3>Phone</h3>
        <p>{brewery.phone}</p>
      </div>
    </div>
  )
}

export default BreweryDetails;
