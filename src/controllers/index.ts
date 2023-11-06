import { Request, Response } from 'express';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

const uri = process.env.MONGO_URI || '';
const _db = process.env.MONGO_DB || '';
const _collection = process.env.MONGO_COLLECTION || '';

export const indexController = async (req: Request, res: Response) => {
  const client = new MongoClient(uri);
  await client.connect();
  const collection = client.db(_db).collection(_collection);
  const data = await collection.find({}).toArray();
  res.render('index.pug', data);
};
