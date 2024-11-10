import React from 'react';

function BouquetCard({ bouquet, toggleLike }) {
  return (
    <div className="bouquet-card">
      <img src={bouquet.image} alt={bouquet.nom} />
      <h3>{bouquet.nom}</h3>
      <p>{bouquet.descr}</p>
      <p>Prix: {bouquet.prix} DA</p>
      {/* Appliquez une classe conditionnelle pour la couleur du bouton "Like" */}
      <button
        onClick={() => toggleLike(bouquet.id)}
        style={{
          color: bouquet.liked ? 'red' : 'black',
          borderColor: bouquet.liked ? 'red' : 'black',
        }}
      >
        {bouquet.liked ? 'Liked' : 'Like'}
      </button>
    </div>
  );
}

export default BouquetCard;