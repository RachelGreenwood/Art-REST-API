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
    
    const artwork = art.find(artwork => artwork.isbn === isbn);
  if(!artwork) {
    res.status(404).send("Sorry, I don't have that piece");
  }
    res.json(artwork);
  })

app.listen(port, () => {
    console.log(`API server listening on port ${port}`);
  });