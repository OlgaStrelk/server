const express = require('express');
const { PORT = 3000 } = process.env;
const app = express();
const routes = require('./routes')

const timeLog = (req, res, next) => {
  const date = new Date();
  console.log(date)
  console.log(req.method); 
  next(); 
};

app.use(timeLog)

app.use('/', routes)

routes.get()
app.listen(PORT, () => {
  console.log('Все есть')
});

const express = require('express');
const routes = require('./routes.js');


  console.log(date)
    console.log(req.method);
app.use('/', routes);

app.listen(PORT, () => {
  console.log('Ссылка на сервер:');
  console.log(BASE_PATH);
});
