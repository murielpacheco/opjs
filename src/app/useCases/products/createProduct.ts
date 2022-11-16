import { Request, Response } from 'express';
import { Product } from '../../models/Product';


export async function createProduct(req: Request, res: Response) {
  try {
    const { name, price, description, ingredients, category } = req.body;
    const imagePath = req.file?.filename;

    if (!name) {
      res.status(400).json({
        error: 'Product name is required'
      });
    }

    const product = await Product.create({
      name,
      price: Number(price),
      description,
      category,
      ingredients: ingredients ? JSON.parse(ingredients) : [],
      imagePath
    });

    res.status(201).json(product);
  }
  catch {
    res.sendStatus(500);
  }
}