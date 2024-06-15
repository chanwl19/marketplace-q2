const express = require('express');
const path = require('path')

const app = express();

const port = parseInt(process.env.PORT) || process.argv[3] || 8080;

app.get('/', (req, res) => {
  res.json({"message": "Welcome to DressStore Applications."});
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
})