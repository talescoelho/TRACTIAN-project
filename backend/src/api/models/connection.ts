import { MongoClient } from 'mongodb';
import { load } from 'ts-dotenv';
 
const env = load({
  MONGO_CONNECTION_URL: String,
  COLLECTION_NAME: String,
  DB_NAME: String,
});

const MONGO_DB_URL: string = env.MONGO_CONNECTION_URL;
const DB_NAME: string = env.DB_NAME;
let db: any = null;
const client = new MongoClient(MONGO_DB_URL);

const connection = async () => {
  await client.connect();
  return client.db(DB_NAME);
};

export default connection;
