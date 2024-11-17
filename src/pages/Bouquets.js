import React from 'react';
import Bouquet from '../components/Bouquet';

const Bouquets = ({ bouquets, onLike }) => (
  <div className="container">
    <h2>Bouquets</h2>
    <div className="row">
      {bouquets.map(bouquet => (
        <Bouquet key={bouquet.id} bouquet={bouquet} onLike={onLike}/>
      ))}
    </div>
  </div>
);

export default Bouquets;
