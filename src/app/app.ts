import express from 'express';
import logger from 'morgan';
import cors from 'cors';

import path from 'path';
import { AppDataSource } from '../db/db';
import companiesRouter from '../companies/companies.router';
import exeptionsFilter from './middlewares/exeption.filter';

const app = express();

app.use(logger('tiny'));
app.use(cors());
app.use(express.json());

AppDataSource.initialize()
    .then(() => {
        console.log('Data Source has been initialized!');
    })
    .catch((err) => {
        console.error('Error during Data Source initialization', err);
    });

const staticFilesPath = path.join(__dirname, '../', 'public');
app.use('/api/v1/public', express.static(staticFilesPath));

app.use('/api/v1/companies', companiesRouter);

app.use(exeptionsFilter);
export default app;
