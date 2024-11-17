import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './navbar';
import Home from './pages/Home';
import Bouquets from './pages/Bouquets';
import Fleurs from './pages/Fleurs';
import MonCompte from './pages/MonCompte';
import './App.css';

const App = () => {
  const [mesBouquets, setMesBouquets] = useState([
    { id: 1, nom: 'Fleurs EU', descr: 'fleurs roses', image: '/images/image1.jpg', prix: 1500, liked: false },
    { id: 2, nom: 'Fleurs DZ', descr: 'multicouleurs', image: '/images/image22.jpg', prix: 2000, liked: false },
    { id: 3, nom: 'Fleurs BR', descr: 'fleurs rouge', image: '/images/image33.jpg', prix: 2000, liked: false },
  ]);

  const handleLike = async (id) => {
   
    const updatedBouquets = mesBouquets.map(bouquet => 
      bouquet.id === id ? { ...bouquet, liked: !bouquet.liked } : bouquet
    );
    setMesBouquets(updatedBouquets);
  
    
    try {
      const response = await fetch(`/like?id=${id}`, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }), 
      });
      
      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi du like');
      }
      console.log('Like envoyé avec succès');
    } catch (error) {
      console.error('Erreur lors de l\'envoi du like:', error);
    }
  };
  

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/bouquets" element={<Bouquets bouquets={mesBouquets} onLike={handleLike} />} />
        <Route path="/fleurs" element={<Fleurs />} />
        <Route path="/moncompte" element={<MonCompte />} />
      </Routes>
    </Router>
  );
}

export default App;
