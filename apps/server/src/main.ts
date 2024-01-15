/* eslint-disable @typescript-eslint/no-unused-vars */


/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { connectDB } from '@config/mongo';
import { ensurePlugins } from '@helpers/pulumiMethods';


// setting up dotenv for env variables
dotenv.config();

//connect to database
connectDB()

// Install necessary GCP plugins once upon boot
ensurePlugins();


// port to listen on development
const port = process.env.PORT || 3333;

// initializing app
const app = express();

// configuring cors
const allowedOrigins = ['*'];
const options: cors.CorsOptions = {
  origin: process.env.NODE_ENV === 'development' ? '*' : allowedOrigins,
};

// app level middleware
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('common'));
app.use(express.json());
app.use(cors(options));

app.use('/assets', express.static(path.join(__dirname, 'assets')));

// default route for api
app.get('/', (req, res) => {
  res.send({ message: 'Welcome to locations-api!' });
});

// user defined routes
import authRoute from '@routes/auth/auth'
import staticSitesRoute from '@routes/static-sites/static-sites'

// user defined routers 
app.use('/api/auth', authRoute)
app.use('/api/static-sites', staticSitesRoute)


// eror handler
app.use((req, res, next) => {
  const error = new Error(`Not found - ${req.originalUrl}`);
  res.status(404);
  next(error);
});

//error handling middleware
app.use((error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  console.log(error);
  res.send({
    message: error.message,
    stack:
      process.env.NODE_ENV === 'production'
        ? 'you are in production'
        : error.stack,
  });
});

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`);
});
server.on('error', console.error);
