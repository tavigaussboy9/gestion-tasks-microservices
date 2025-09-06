const express = require('express');
const app = express();
const PORT = process.env.PORT || 3002;
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Service de gestion des tâches actif');
});
app.listen(PORT, () => {
  console.log(`Service de gestion des tâches écoutant sur le port ${PORT}`);
});
