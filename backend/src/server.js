import express from 'express';
import { data } from '../data.js';

const server = express();

server.get('/api/products', (req, res) => {
  return res.send(data.products);
});

server.get('/api/products/slug/:slug', (req, res) => {
  const product = data.products.find((x) => x.slug === req.params.slug);

  if (product) {
    return res.send(product);
  } else {
    return res.status(404).send({ message: 'Product Not Found' });
  }
});

server.get('/api/products/:id', (req, res) => {
  const product = data.products.find((x) => x._id === req.params.id);

  if (product) {
    return res.send(product);
  } else {
    return res.status(404).send({ message: 'Product Not Found' });
  }
});

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server is running on localhost://${port}`);
});
