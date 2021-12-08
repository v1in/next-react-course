import {
  connectDatabase,
  insertDocument,
  getAllDocuments,
} from '../../../helpers/db-util';

async function handler(req, res) {
  const eventId = req.query.eventId;

  // connect db
  const client = await connectDatabase();

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

    // add new comment to db
    const result = await insertDocument(client, 'comments', newComment);

    newComment.id = result.insertedId;

    res.status(201).json({message: 'Added comment.', comment: newComment});
  }

  if (req.method === 'GET') {
    // get all comments per eventId
    const documents = await getAllDocuments(
      client,
      'comments',
      {_id: -1},
      {eventId: eventId},
    );

    res.status(200).json({comments: documents});
  }

  client.close();
}

export default handler;
