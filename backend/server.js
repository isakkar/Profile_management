const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Route pour la racine "/"
app.get('/', (req, res) => {
  res.send('Bienvenue sur le serveur Node.js !');
});

// Exemple de route pour la connexion
app.post('/login', (req, res) => {
  const { email, password, role } = req.body;

  // Exemple de vérification d'utilisateur
  if (email === 'test@test.com' && password === '1234' && role === 'student') {
    res.status(200).send({ message: 'Connexion réussie' });
  } else {
    res.status(401).send({ message: 'Email ou mot de passe incorrect' });
  }
});

// Démarrer le serveur
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
