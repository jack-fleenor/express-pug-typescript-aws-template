import { Request, Response } from 'express';
// import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

// const uri = process.env.MONGO_URI || '';
// const _db = process.env.MONGO_DB || '';
// const _collection = process.env.MONGO_COLLECTION || '';

export const indexController = async (req: Request, res: Response) => {
  // const client = new MongoClient(uri);
  // await client.connect();
  // const collection = client.db(_db).collection(_collection);
  // const data = await collection.find({}).toArray();
  const data = {
    title: 'This is the title for the index page',
    body: ['This is a body.', 'So is this.'],
  };
  res.render('index.pug', data);
};
