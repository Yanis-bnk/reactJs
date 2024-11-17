import React from 'react';

const Bouquet = ({ bouquet, onLike }) => (
  <div className="card" style={{ width: '18rem' }}>
    <img src={bouquet.image} className="card-img-top" alt={bouquet.nom} />
    <div className="card-body">
      <h5 className="card-title">{bouquet.nom}</h5>
      <p className="card-text">{bouquet.descr}</p>
      <p className="card-text">{bouquet.prix} DA</p>
      <button  onClick={() => onLike(bouquet.id)}>
        {bouquet.liked ? 'Unlike' : 'Like'}
      </button>
    </div>
  </div>
);

export default Bouquet;
