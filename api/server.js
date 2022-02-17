const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const server = express();
const authRouter = require('./auth/auth-router')

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter)

server.use((err, req, res, next) => { 
    res.status(err.status || 500).json({
      message: err.message,
      stack: err.stack,
    });
  });

module.exports = server;