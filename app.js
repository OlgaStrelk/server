const express = require('express');

const { PORT = 3000 } = process.env;
const app = express();

const routes = require('./routes')


app.use('/', routes)
app.listen(PORT, () => {
  console.log('Ссылка на сервер:');
  console.log(BASE_PATH);
});
