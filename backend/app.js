
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const connection = require('./db'); 

const app = express();


app.use(express.json());
app.use(cors());


app.post('/like', (req, res) => {
  const { id } = req.query;  

  if (!id) {
    return res.status(400).json({ error: "ID manquant" });
  }

  
  const query = 'UPDATE bouquets SET liked = NOT liked WHERE id = ?';

  connection.query(query, [id], (err, results) => {
    if (err) {
      console.error('Erreur lors de la mise à jour du like:', err);
      return res.status(500).json({ error: 'Erreur interne du serveur' });
    }

 
    if (results.affectedRows === 0) {
      return res.status(404).json({ error: 'Bouquet non trouvé' });
    }

    
    res.status(200).json({
      message: `Le bouquet avec l'ID ${id} a été ${results.changedRows > 0 ? 'liké' : 'déliké'}.`
    });
  });
});


app.get('/bouquets', (req, res) => {
  const query = 'SELECT * FROM bouquets';

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des bouquets:', err);
      return res.status(500).json({ error: 'Erreur interne du serveur' });
    }

    res.status(200).json(results);  
  });
});


const port = 3001;
app.listen(port, () => {
  console.log(`Serveur backend démarré sur http://localhost:${port}`);
});
