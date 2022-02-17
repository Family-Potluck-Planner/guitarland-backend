const router = require('express').Router()
const bcrypt = require('bcryptjs');
const { JWT_SECRET } = require('./secrets');
const jwt = require('jsonwebtoken');

module.exports = router;