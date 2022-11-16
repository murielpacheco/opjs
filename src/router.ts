import { Router } from 'express';

import { listCategories } from './app/useCases/categories/listAllCategories';
import { createCategory } from './app/useCases/categories/createCategory';

export const router = Router();

// List Categories
router.get('/categories', listCategories);

// Create Category
router.post('/categories', createCategory);

// List Products
router.get('/products', (req, res) => {
  res.send('OK');
});

// Create Product
router.post('/products', (req, res) => {
  res.send('OK');
});

// Get products by category
router.get('/categories/:categoryId/products', (req, res) => {
  res.send('OK');
});

// List orders
router.get('/oders', (req, res) => {
  res.send('OK');
});

// Create order
router.post('/order', (req, res) => {
  res.send('OK');
});
// Change order status
router.patch('/orders/:orderId', (req, res) => {
  res.send('OK');
});

// Delete or Cancel order
router.delete('/orders/:orderId', (req, res) => {
  res.send();
});