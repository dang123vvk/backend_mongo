const express = require('express');
const router = express.Router();
const db = require('../lib/db');
const {User} = require('../models/user');

router.get('/', async (req, res) => {
    User.find().then((user) => {
        res.send({
            user
        });
    }, (e) => {
        res.status(400).send(e);
    });
});

router.post('/add', async (req, res) => {
    var user = new User({
        userID: req.body.userID,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role
    });
    user.save().then((user) => {
        res.send(user);
    }, (e) => {
        res.status(400).send(e);
    });
});

router.get('/:userID', async (req, res) => {
    var userID = req.params.userID;
    User.findOne({userID:userID}).then((user) => {
        res.send(user);
      }, (e) => {
        res.status(400).send(e);
      });
});

router.put('/:userID', (req, res) => {
    var query = { userID: req.params.userID };
    User.findOneAndUpdate(query, {
      role: req.body.role,
      password: req.body.password
    }, {upsert:true}, (e, raw) => {
      if (e) {
        res.status(400).send('Invalid user supplied');
      }
      res.send(raw);
    });
  });

router.delete('/:userID', (req, res) => {
    var query = { userID: req.params.userID };
    User.findOneAndRemove(query, 
      (e, raw) => {
        if (e) {
          res.status(400).send('Invalid username supplied');
        }
      res.send(raw);
    });
  });

module.exports = router;