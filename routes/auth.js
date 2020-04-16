const express = require('express');
const bcyptjs = require('bcryptjs');
const { check, validationResult } = require('express-validator/check');
const config = require('config');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const auth = require('../middleware/auth');

const router = express.Router();

//@route    GET api/auth
//@des      get logged  in USER
//@acess    Private
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) {
      return res.status(401).json({ msg: 'No user found' });
    }
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

//@route    POST api/auth
//@des      LOGIN USER
//@acess    public
router.post('/', (req, res) => {
  res.send('LOGIN A USER');
});

module.exports = router;
