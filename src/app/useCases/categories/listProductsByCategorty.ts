import { Request, Response } from 'express';
import { Product } from '../../models/Product';


export async function listProductsByCategory(req: Request, res: Response) {
  const {categoryId} = req.params;

  try {
    const products = await Product.find().where('category').equals(categoryId);

    res.status(200).json(products);
  }
  catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}