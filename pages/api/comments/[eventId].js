import {MongoClient} from 'mongodb';

async function handler(req, res) {
  const eventId = req.query.eventId;

  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.NEXT_PUBLIC_MONGO_DB_USERNAME}:${process.env.NEXT_PUBLIC_MONGO_DB_PASSWORD}@vldmrsandbox.kcf79.mongodb.net/events?retryWrites=true&w=majority`,
  );

  if (req.method === 'POST') {
    const {email, name, text} = req.body;
    if (
      !email.includes('@') ||
      !name ||
      !name.trim() === '' ||
      !text ||
      !text.trim() === ''
    ) {
      res.status(422).json({message: 'Invalid input.'});
      return;
    }

    const newComment = {
      email,
      name,
      text,
      eventId,
    };

    const db = client.db();

    await db.collection('comments').insertOne(newComment);

    res.status(201).json({message: 'Added comment.', comment: newComment});
  }

  if (req.method === 'GET') {
    const dummyList = [
      {id: 'c1', name: 'Max', text: 'A first comment!'},
      {id: 'c2', name: 'Alex', text: 'A second comment!'},
      {id: 'c3', name: 'Tom', text: 'A third comment!'},
    ];
    res.status(200).json({comments: dummyList});
  }

  client.close();
}

export default handler;
