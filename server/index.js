import express from 'express';
import BOOKS from './art.js';

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`API server listening on port ${port}`);
  });