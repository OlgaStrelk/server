const express = require('express');

const { PORT = 3000 } = process.env;
const app = express();

const routes = require('./routes')

app.use('/', routes)

routes.get()
app.listen(PORT, () => {
  console.log('Все есть')
});

