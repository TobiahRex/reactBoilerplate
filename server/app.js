/*  eslint-disable no-console  */
/*  eslint-disable global-require  */

import express from 'express';
import path from 'path';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const PORT = process.env.PORT || 3001;
const MONGO = process.env.MONGODB_URI || 'mongodb://localhost/template';
const BUILD = process.env.NODE_ENV || 'development';
const app = express();
const api = require('./api');


app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use((req, res, next) => {
  res.handle = (err, data) => {
    console.log('Response Error: ', err, '\nResponse Data: ', data);
    res.status(err ? 400 : 200).send(err || data);
  };
  next();
});

if (BUILD === 'development') {
  require('dotenv').load();
  process.env.DEV = 'development';
  const webpack = require('webpack');
  const hotMiddleware = require('webpack-hot-middleware');
  const devMiddleware = require('webpack-dev-middleware');
  const config = require('../webpack.config');
  const compiler = webpack(config);

  app.use(devMiddleware(
    compiler,
    {
      noInfo: true,
      publicPath: config.output.publicPath,
    })
  );
  app.use(hotMiddleware(compiler));
}

app.use('/api', api);
app.get('*', (req, res) => {
  let indexFile;
  if (BUILD === 'development') {
    indexFile = path.join(__dirname, '../src/index.html');
  } else {
    indexFile = path.join(__dirname, './index.html');
  }
  console.log('📁 indexFile = ', indexFile);
  res.sendFile(indexFile);
});
app.listen(PORT, err => console.log(err || `==> 📡 Server @ ${PORT} 🛠 BUILD = ${BUILD}`));
mongoose.connect(MONGO, err => console.log(err || `==> 📜 MONGO @ ${MONGO}`));
