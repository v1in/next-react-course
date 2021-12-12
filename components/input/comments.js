import {useState, useContext, useEffect} from 'react';
import NotificationContext from '../../store/notification-store';

import CommentList from './comment-list';
import NewComment from './new-comment';
import classes from './styles/comments.module.css';

function Comments(props) {
  const {eventId} = props;
  const notificationCtx = useContext(NotificationContext);

  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (showComments) {
      fetch(`/api/comments/${eventId}`)
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          throw res;
        })
        .then((data) => {
          setComments(data.comments);
        })
        .catch((err) => {
          console.log('Error', err);
          notificationCtx.showNotification({
            title: 'Error!',
            message: err.message || 'Something went wrong!',
            status: 'error',
          });
        })
        .finally(() => setLoading(false));
    }
  }, [showComments]);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  const addCommentHandler = (commentData) => {
    notificationCtx.showNotification({
      title: 'Sending comment...',
      message: 'Your comment is correctly being stored into a database.',
      status: 'pending',
    });

    fetch(`/api/comments/${eventId}`, {
      method: 'POST',
      body: JSON.stringify(commentData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return response.json().then((data) => {
          throw new Error(data.message || 'Something went wrong!');
        });
      })
      .then((data) => {
        notificationCtx.showNotification({
          title: 'Success!',
          message: 'Your comment was saved!',
          status: 'success',
        });
      })
      .catch((error) => {
        notificationCtx.showNotification({
          title: 'Error!',
          message: error.message || 'Something went wrong!',
          status: 'error',
        });
      });
  };

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && (
        <>
          <NewComment onAddComment={addCommentHandler} />
          <CommentList items={comments} />
          {loading && <div>Loading...</div>}
        </>
      )}
    </section>
  );
}

export default Comments;
