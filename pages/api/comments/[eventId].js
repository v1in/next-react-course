import {
  connectDatabase,
  insertDocument,
  getAllDocuments,
} from '../../../helpers/db-util';

async function handler(req, res) {
  const eventId = req.query.eventId;

  let client;

  // connect db
  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({message: 'Connection to the DB failed!'});
    return;
  }

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
      client.close();
      return;
    }

    const newComment = {
      email,
      name,
      text,
      eventId,
    };

    let result;

    // add new comment to db
    try {
      result = await insertDocument(client, 'comments', newComment);
      newComment._id = result.insertedId;
      res.status(201).json({message: 'Added comment.', comment: newComment});
    } catch (error) {
      res.status(500).json({message: 'Inserting comment failed!'});
    }
  }

  if (req.method === 'GET') {
    // get all comments per eventId
    try {
      const documents = await getAllDocuments(
        client,
        'comments',
        {_id: -1},
        {eventId: eventId},
      );
      res.status(200).json({comments: documents});
    } catch (error) {
      res.status(500).json({message: 'Getting comments failed.'});
    }
  }

  client.close();
}

export default handler;
