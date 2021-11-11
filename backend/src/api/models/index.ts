import { ObjectId } from 'mongodb';
import connection from './connection';
import { User } from '../services/class';

const getAll = (collectionName: string) => (
  connection()
    .then((db) => db.collection(collectionName).find().toArray())
    .then((response) => response)
    .catch((err) => err)
);

const insertOne = async (collectionName: string, item: User) => (
  connection()
    .then((db) => db.collection(collectionName)
      .insertOne({ ...item, create: new Date(), update: new Date() }))
    .then(() => ({ ...item, create: new Date(), update: new Date() }))
    .catch((err) => err)
);

export {
  getAll,
  insertOne,
};
