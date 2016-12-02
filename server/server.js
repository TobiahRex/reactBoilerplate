import express from 'express';
import http from 'http';
import path from 'path';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import webpack from 'webpack';
import hotMiddleware from 'webpack-hot-middleware';
import devMiddleware from 'webpack-dev-middleware';
import socketIO from 'socket.io';
import webpackConfig from '../webpack.config';
import api from './api';

// ---------------------------- CONFIG -----------------------------------------
const PORT = process.env.PORT || 3001;
const MONGO = process.env.MONGODB_URI || 'mongodb://localhost/template';
const BUILD = process.env.NODE_ENV || 'development';
const app = express();
const server = new http.Server(app);
const io = socketIO(server);

let socketEmitter;
io.on('connection', (socket) => {
  process.stdout.write('\n>>> Socket Connection!\n');
  socketEmitter = (type, data) => socket.emit(type, data);
});

// ---------------------- Express Middleware -----------------------------------
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use((req, res, next) => {
  const resRef = res;
  resRef.socketEmitter = socketEmitter;
  resRef.handle = (err, data) => {
    process.stdout.write('Response Error: ', err, '\nResponse Data: ', data);
    res.status(err ? 400 : 200).send(err || data);
  };
  next();
});

if (BUILD === 'development') {
  dotenv.config({ silent: true });
  process.env.DEV = 'development';
  const compiler = webpack(webpackConfig);

  app.use(devMiddleware(
    compiler,
    {
      noInfo: true,
      publicPath: webpackConfig.output.publicPath,
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
  process.stdout.write('📁 indexFile = ', indexFile);
  res.sendFile(indexFile);
});

// --------------------------- Listeners ---------------------------------------
server.listen(PORT, err =>
  process.stdout.write(err || `==> 📡  Server @ ${PORT}
`));
mongoose.connect(MONGO, err => process.stdout.write(err || `==> 📜  MONGO @ ${MONGO}
`));
