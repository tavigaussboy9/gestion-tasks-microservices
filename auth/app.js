const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Service d'authentification actif');
});
app.listen(PORT, () => {
  console.log(`Service d'authentification écoutant sur le port ${PORT}`);
});
