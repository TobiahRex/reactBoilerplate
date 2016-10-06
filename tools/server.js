/*  eslint-disable no-console  */
/*  eslint-disable global-require  */

import express from 'express';
import path from 'path';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import api from './api';

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO = process.env.MONGODB_URI || 'mongodb://localhost/template';
const BUILD = process.env.NODE_ENV || 'development';

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

if (BUILD === 'development') {
  const webpack = require('webpack');
  const hotMiddleware = require('webpack-hot-middleware');
  const devMiddleware = require('webpack-dev-middleware');
  const config = require('../webpack.config');

  const compiler = webpack(config);
  app.use(hotMiddleware(compiler));
  app.use(devMiddleware(compiler,
    {
      noInfo: true,
      publicPath: config.output.publicPath,
    })
  );
}

app.use('/api', api);
app.get('*', (req, res) => {
  let indexFile;
  if (BUILD === 'development') {
    indexFile = path.join(__dirname, '../src/index.html');
  } else {
    indexFile = path.join(__dirname, './index.html');
  }
  console.log('indexFile: ', indexFile);
  res.sendFile(indexFile);
});
app.listen(PORT, (err) => {
  console.log(err || `server started port ${PORT}
  BUILD = ${BUILD}`);
});

mongoose.connect(MONGO, err => console.log(err || `MONGO @ ${MONGO}`));
