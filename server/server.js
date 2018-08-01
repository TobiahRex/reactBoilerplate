/* eslint-disable import/newline-after-import, import/imports-first*/

console.clear();
require('dotenv').config({ silent: true });

import express from 'express';
import path from 'path';
import morgan from 'morgan';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import webpack from 'webpack';
import hotMiddleware from 'webpack-hot-middleware';
import devMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config';
import api from './api';

mongoose.Promise = Promise;
const PORT = process.env.PORT || 3000;
const MONGO = process.env.MONGODB_URI || 'mongodb://localhost/reactBoilerplate';
const app = express();
const compiler = webpack(webpackConfig);

app.use(
  devMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    noInfo: true,
    quiet: false,
    stats: {
      assets: true,
      colors: true,
      version: true,
      hash: true,
      timings: false,
      chunks: false,
      chunkModules: false
    }
  })
);
app.use(hotMiddleware(compiler));
app.use((req, res, next) => {
  const resRef = res;
  resRef.handle = (err, data) => {
    if (err) {
      process.stdout.write(`
        Response Error: 😕

        ${err}
      `);
    } else {
      process.stdout.write(`
        Response Data: 😎

        ${data}
      `);
    }
    res.status(err ? 400 : 200).send(err || data);
  };
  next();
});
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('src'));
app.use('/api', api);
app.get('*', (req, res) => res.sendFile(path.resolve('src/index.html')));
app.listen(PORT, err =>
  process.stdout.write(
    JSON.stringify(err, null, 2) ||
      `
  ==> 📡  Server @ ${PORT}
`
  )
);
mongoose.connect(
  MONGO,
  err =>
    process.stdout.write(
      err ||
        `==> 📜  MONGO @ ${MONGO}
`
    )
);
