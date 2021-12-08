import classes from './styles/comment-list.module.css';

function CommentList(props) {
  const {items} = props;

  return (
    <ol className={classes.comments}>
      {items.map((item) => (
        <li key={item._id}>
          <p>{item.text}</p>
          <div>
            By <address>{item.name}</address>
          </div>
        </li>
      ))}
    </ol>
  );
}

export default CommentList;
