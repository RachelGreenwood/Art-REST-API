import express from 'express';
import BOOKS from './art.js';

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

app.get('/art', (req, res) => {
    console.log([BOOKS]);
    res.json([BOOKS]);
  })

  app.get('/art/:isbn', (req, res) => {
    const { isbn } = req.params;
    console.log(req.params);

    res.json(artwork);
  })

app.listen(port, () => {
    console.log(`API server listening on port ${port}`);
  });