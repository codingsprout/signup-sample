const express = require('express');
const router = express.Router();
const signUpForm = require('../models/SignUp');

router.post('/signup', (req, res) => {
  const signedUpUser = new signUpForm({
    fullName: req.body.fullName,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
  signedUpUser
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
