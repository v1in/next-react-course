import {MongoClient} from 'mongodb';

export async function connectDatabase() {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.NEXT_PUBLIC_MONGO_DB_USERNAME}:${process.env.NEXT_PUBLIC_MONGO_DB_PASSWORD}@vldmrsandbox.kcf79.mongodb.net/events?retryWrites=true&w=majority`,
  );

  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db();

  const result = await db.collection(collection).insertOne(document);

  return result;
}

export async function getAllDocuments(client, collection, sort, filter) {
  const db = client.db();

  const documents = await db
    .collection(collection)
    .find(filter)
    .sort(sort)
    .toArray();

  return documents;
}
