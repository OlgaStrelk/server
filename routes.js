const router = require('express').Router();
// const { users } = require('./db.js');
router.get('/users', (req, res) => {
    res.send(users)
  })
  
  router.get('/users/:id', (req, res) => {
    res.send(users[req.params.id])
  })

module.exports = router;