import express from 'express';
import { data } from '../data.js';

const server = express();

server.get('/api/products', (req, res) => {
  return res.send(data.products);
});

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server is running on localhost://${port}`);
});
