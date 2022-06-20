const router = require('express').Router();
// const { users } = require('./db.js');
router.get('/users', (req, res) => {
    res.send(users)
  })
  
  router.get('/users/:id', (req, res) => {
    if (!users[req.params.id]) {
        res.send(`Такого пользователя не существует`)
    }
    res.send(users[req.params.id])
  })

module.exports = router;