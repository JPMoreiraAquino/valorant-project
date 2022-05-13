import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser'
import express from 'express';
import routes from './routes.js'

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extends: false}));
app.use(express.json());
app.use(cors());
app.use(routes);

app.listen('5000', () => {
  console.log('Express started at http://localhost:5000');
})
