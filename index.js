const express = require('express');

const { PORT = 3000 } = process.env;
const app = express();

app.listen(PORT, () => {
  console.log('Ссылка на сервер:');
  console.log(BASE_PATH);
});

app.get('/animals', (req, res) => {
  res.send(animals)
})