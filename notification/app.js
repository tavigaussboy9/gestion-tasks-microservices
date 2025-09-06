const express = require('express');
const app = express();
const PORT = process.env.PORT || 3003;
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Service de notifications actif');
});
app.listen(PORT, () => {
  console.log(`Service de notifications écoutant sur le port ${PORT}`);
});
